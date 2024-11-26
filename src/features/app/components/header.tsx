'use client';

import Image from 'next/image';
import { Link, useRouter } from '@/i18n/routing';
import { useLocale } from 'next-intl';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
    BellRing,
    CircleHelp,
    Languages,
    PlugZap,
    ScanFace,
    Search,
    ShoppingBag,
    Store,
    UserPlus,
    UserRoundPen,
} from 'lucide-react';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { useState } from 'react';

export default function AppHeader() {
    const localActive = useLocale();

    const [langue, setLangue] = useState<string | undefined>('');

    const changeLanguage = (locale: string) => {};

    return (
        <div className="fixed top-0 left-0 right-0 glass border-b py-2 border-muted ">
            <div className="flex flex-col max-w-6xl mx-auto gap-2">
                {/* navbar link */}
                <div className="w-full mx-auto flex justify-between items-center px-2 lg:px-0 gap-5 text-xs">
                    {/* navbar left */}
                    <div className="flex-1 flex justify-start gap-6">
                        <Link
                            href={'/seller/sign-in'}
                            className="relative flex"
                        >
                            <Button
                                variant={'link'}
                                className="text-xs p-0 after:content-['|'] after:absolute after:-right-4 after:top-[50%] after:text-muted-foreground after:translate-y-[-50%]"
                            >
                                <span>Kênh người bán</span>
                                <Store />
                            </Button>
                        </Link>
                        <Link href={'/seller/sign-up'} className="relative">
                            <Button
                                variant={'link'}
                                className="text-xs p-0 after:content-['|'] after:absolute after:-right-4 after:top-[50%] after:text-muted-foreground after:translate-y-[-50%]"
                            >
                                <span>Đăng ký làm người bán</span>
                                <UserRoundPen />
                            </Button>
                        </Link>
                        <Link
                            href={
                                'https://www.facebook.com/profile.php?id=61560170980112'
                            }
                            className=""
                        >
                            <Button variant={'link'} className="text-xs p-0">
                                <span>Kết nối</span>
                                <PlugZap />
                            </Button>
                        </Link>
                    </div>
                    {/* navbar right */}
                    <div className="flex-1 flex justify-end gap-6">
                        <Link href={'/notification'} className="relative">
                            <Button
                                variant={'link'}
                                className="text-xs p-0 after:content-['|'] after:absolute after:-right-4 after:top-[50%] after:text-muted-foreground after:translate-y-[-50%]"
                            >
                                <span>Thông báo</span> <BellRing />
                            </Button>
                        </Link>
                        <Link href={'/support'} className="relative">
                            <Button
                                variant={'link'}
                                className="text-xs p-0 after:content-['|'] after:absolute after:-right-4 after:top-[50%] after:text-muted-foreground after:translate-y-[-50%]"
                            >
                                <span>Hỗ trợ</span> <CircleHelp />
                            </Button>
                        </Link>

                        <DropdownMenu>
                            <DropdownMenuTrigger className="flex text-xs p-0 items-center gap-2">
                                <span>
                                    {localActive === 'en'
                                        ? 'English'
                                        : 'Tiếng việt'}
                                </span>
                                <Languages className="text-primary size-4" />
                            </DropdownMenuTrigger>
                            <DropdownMenuContent>
                                <DropdownMenuItem
                                    onClick={() => changeLanguage('vi')}
                                    className="cursor-pointer"
                                >
                                    Tiếng việt
                                </DropdownMenuItem>
                                <DropdownMenuItem
                                    onClick={() => changeLanguage('en')}
                                    className="cursor-pointer"
                                >
                                    English
                                </DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                        <Link href={'/sign-up'} className="relative">
                            <Button
                                variant={'link'}
                                className="text-xs p-0 after:content-['|'] after:absolute after:-right-4 after:top-[50%] after:text-[#e11d48] after:translate-y-[-50%] text-[#e11d48] font-bold"
                            >
                                <span>Đăng ký</span>
                                <UserPlus />
                            </Button>
                        </Link>
                        <Link href={'/sign-in'}>
                            <Button
                                variant={'link'}
                                className="text-xs p-0 text-[#e11d48] font-bold"
                            >
                                <span>Đăng nhập</span>
                                <ScanFace />
                            </Button>
                        </Link>
                    </div>
                </div>

                {/* navbar search */}
                <div className="w-full mx-auto flex justify-between items-center px-2 lg:px-0 gap-5">
                    <Link
                        href={'/app'}
                        className="w-40 flex items-center gap-1"
                    >
                        <Image
                            src="/png/background.png"
                            alt="Logo"
                            width={40}
                            height={40}
                        ></Image>
                        <h1 className="text-xl font-semibold uppercase text-[#e11d48]">
                            Monney
                        </h1>
                    </Link>
                    <div className="flex-1 flex items-center gap-1 justify-center relative border rounded-lg p-1">
                        <Input
                            className="bg-transparent shadow-none placeholder:text-xs text-primary border-none"
                            placeholder="Tìm kiếm..."
                        ></Input>
                        <Button className="w-16">
                            <Search />
                        </Button>
                    </div>
                    <div className="w-20 flex items-center justify-end text-muted-foreground">
                        <ShoppingBag className="cursor-pointer text-[#e11d48]" />
                    </div>
                </div>
            </div>
        </div>
    );
}
