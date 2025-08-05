import { NextRequest, NextResponse } from 'next/server';
import { writeFile, readFile, mkdir } from 'fs/promises';
import path from 'path';

export async function GET(request, { params }) {
  try {
    const { slug } = params;
    
    // Read website data from JSON file
    const dataDir = path.join(process.cwd(), 'data', 'websites');
    const filePath = path.join(dataDir, `${slug}.json`);
    
    const fileContent = await readFile(filePath, 'utf-8');
    const websiteData = JSON.parse(fileContent);
    
    return NextResponse.json({
      success: true,
      data: websiteData
    });
    
  } catch (error) {
    console.error('Error fetching website data:', error);
    
    if (error.code === 'ENOENT') {
      return NextResponse.json(
        { error: 'Website not found' },
        { status: 404 }
      );
    }
    
    return NextResponse.json(
      { error: 'Failed to fetch website data' },
      { status: 500 }
    );
  }
}

export async function POST(request) {
  try {
    const publishData = await request.json();
    
    console.log('Publishing website with slug:', publishData.slug);
    
    // Validate required fields
    const requiredFields = ['slug', 'brideName', 'groomName'];
    const missingFields = requiredFields.filter(field => !publishData[field]);
    
    if (missingFields.length > 0) {
      return NextResponse.json(
        { error: `Missing required fields: ${missingFields.join(', ')}` },
        { status: 400 }
      );
    }

    // Create data directory if it doesn't exist
    const dataDir = path.join(process.cwd(), 'data', 'websites');
    try {
      await mkdir(dataDir, { recursive: true });
      console.log('Data directory created/verified at:', dataDir);
    } catch (error) {
      console.log('Directory creation error (might already exist):', error.message);
    }
    
    // Save website data to JSON file
    const filePath = path.join(dataDir, `${publishData.slug}.json`);
    await writeFile(filePath, JSON.stringify(publishData, null, 2));
    
    console.log('Website data saved to:', filePath);

    // Log the website data
    console.log('Publishing website:', {
      slug: publishData.slug,
      brideName: publishData.brideName,
      groomName: publishData.groomName,
      eventDate: publishData.eventDate,
      eventLocation: publishData.eventLocation,
      publishedAt: publishData.publishedAt,
      galleryCount: publishData.galleryImages?.length || 0
    });

    // Return success response
    return NextResponse.json({
      success: true,
      message: 'Website published successfully',
      websiteId: publishData.slug,
      publishedUrl: `/wedding/${publishData.slug}`,
      publishedAt: publishData.publishedAt
    });

  } catch (error) {
    console.error('Error publishing website:', error);
    return NextResponse.json(
      { error: 'Failed to publish website' },
      { status: 500 }
    );
  }
}
