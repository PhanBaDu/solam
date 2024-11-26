import Image from 'next/image';

export default function Products() {
    return (
        <div className="grid grid-cols-6 gap-4 text-sm">
            <div className="border rounded-lg overflow-hidden">
                <Image
                    src={'/test.jpeg'}
                    alt="test"
                    width={177}
                    height={208}
                    className="w-full h-52 object-cover"
                />
                <div className="p-2">
                    <p>Card item</p>
                    <span className="text-[#e11d48] flex gap-1 font-bold">
                        <span className="underline">đ</span>25.000
                    </span>
                </div>
            </div>
            <div className="border rounded-lg overflow-hidden">
                <Image
                    src={'/test.jpeg'}
                    alt="test"
                    width={177}
                    height={208}
                    className="w-full h-52 object-cover"
                />
                <div className="p-2">
                    <p>Card item</p>
                    <span className="text-[#e11d48] flex gap-1 font-bold">
                        <span className="underline">đ</span>25.000
                    </span>
                </div>
            </div>
            <div className="border rounded-lg overflow-hidden">
                <Image
                    src={'/test.jpeg'}
                    alt="test"
                    width={177}
                    height={208}
                    className="w-full h-52 object-cover"
                />
                <div className="p-2">
                    <p>Card item</p>
                    <span className="text-[#e11d48] flex gap-1 font-bold">
                        <span className="underline">đ</span>25.000
                    </span>
                </div>
            </div>
            <div className="border rounded-lg overflow-hidden">
                <Image
                    src={'/test.jpeg'}
                    alt="test"
                    width={177}
                    height={208}
                    className="w-full h-52 object-cover"
                />
                <div className="p-2">
                    <p>Card item</p>
                    <span className="text-[#e11d48] flex gap-1 font-bold">
                        <span className="underline">đ</span>25.000
                    </span>
                </div>
            </div>
            <div className="border rounded-lg overflow-hidden">
                <Image
                    src={'/test.jpeg'}
                    alt="test"
                    width={177}
                    height={208}
                    className="w-full h-52 object-cover"
                />
                <div className="p-2">
                    <p>Card item</p>
                    <span className="text-[#e11d48] flex gap-1 font-bold">
                        <span className="underline">đ</span>25.000
                    </span>
                </div>
            </div>
            <div className="border rounded-lg overflow-hidden">
                <Image
                    src={'/test.jpeg'}
                    alt="test"
                    width={177}
                    height={208}
                    className="w-full h-52 object-cover"
                />
                <div className="p-2">
                    <p>Card item</p>
                    <span className="text-[#e11d48] flex gap-1 font-bold">
                        <span className="underline">đ</span>25.000
                    </span>
                </div>
            </div>
            <div className="border rounded-lg overflow-hidden">
                <Image
                    src={'/test.jpeg'}
                    alt="test"
                    width={177}
                    height={208}
                    className="w-full h-52 object-cover"
                />
                <div className="p-2">
                    <p>Card item</p>
                    <span className="text-[#e11d48] flex gap-1 font-bold">
                        <span className="underline">đ</span>25.000
                    </span>
                </div>
            </div>
        </div>
    );
}
