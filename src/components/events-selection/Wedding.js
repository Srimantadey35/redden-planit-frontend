import React from 'react'

function Wedding() {
    return (
        <div className="flex items-center">
            <div className="flex flex-col w-full mr-7">
                <label
                    htmlFor="brideName"
                    className="font-normal text-[#151515] text-[16px] 3xl:text-[18px]"
                >
                    Name of Bride<span className="text-[#FF2C2C]">*</span>
                </label>
                <input
                    required
                    className="h-[44px] 3xl:h-[53px] mt-1 bg-white placeholder:text-[#919191] placeholder:text-[14px] placeholder:font-normal px-5 border border-[#EEEEEE] rounded-lg text-black outline-none"
                    placeholder="Enter bride’s name"
                    type="text"
                    name="brideName"
                    id="brideName"
                    value={formData.brideName}
                    onChange={handleChange}
                />
            </div>
            <div className="flex flex-col w-full ">
                <label
                    htmlFor="groomName"
                    className="font-normal text-[#151515] text-[16px] 3xl:text-[18px]"
                >
                    Name of Groom<span className="text-[#FF2C2C]">*</span>
                </label>
                <input
                    required
                    className="h-[44px] 3xl:h-[53px] mt-1 bg-white placeholder:text-[#919191] placeholder:text-[14px] placeholder:font-normal px-5 border border-[#EEEEEE] rounded-lg text-black outline-none"
                    placeholder="Enter Groom's name"
                    type="text"
                    name="groomName"
                    id="groomName"
                    value={formData.groomName}
                    onChange={handleChange}
                />
            </div>
        </div>
    )
}

export default Wedding