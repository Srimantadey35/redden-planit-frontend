// app/update-business/page.js
import React, { Suspense } from 'react';
import UpdateBusiness from './UpdateBusiness';

export default function UpdateBusinessPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <UpdateBusiness/>
    </Suspense>
  );
}
