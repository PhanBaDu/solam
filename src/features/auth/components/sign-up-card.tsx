'use client';

import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

import { Button } from '@/components/ui/button';
import { FcGoogle } from 'react-icons/fc';
import { FaFacebook } from 'react-icons/fa';
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';
import { TextGenerateEffectCustom } from '@/components/ui/text-generate-custom';
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormMessage,
} from '@/components/ui/form';
import { ChevronRight } from 'lucide-react';
import Image from 'next/image';
import { Link } from '@/i18n/routing';

const formSchema = z.object({
    email: z.string().min(2, {
        message: 'Email phải có ít nhất 2 ký tự.',
    }),
});

export default function SignUpCard() {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: '',
        },
    });

    function onSubmit(values: z.infer<typeof formSchema>) {
        console.log(values);
    }

    return (
        <div className="flex-1 flex justify-between items-center">
            <div className="flex">
                <Image
                    className="absolute top-[15%] translate-y-[-15%] left-52"
                    src="/png/background.png"
                    alt="Logo"
                    width={500}
                    height={500}
                ></Image>
                <h1 className="text-5xl font-semibold uppercase text-[#e11d48] flex items-baseline gap-2">
                    Monney{' '}
                    <span className="text-base text-[#e11d48]">
                        <TextGenerateEffectCustom
                            duration={0.3}
                            className="text-[#e11d48] dark:text-[#e11d48]"
                            words="Nền tảng thương mại điện tử"
                        />
                    </span>
                </h1>
            </div>
            <Card>
                <CardHeader>
                    <CardTitle className="text-center uppercase">
                        <h1 className="text-xl">Đăng Ký Tài Khoản</h1>
                        <TextGenerateEffectCustom
                            duration={0.3}
                            words={
                                'Vui lòng điền thông tin chi tiết để bắt đầu'
                            }
                            className="text-xs text-muted-foreground dark:text-muted-foreground"
                        />
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <Form {...form}>
                        <form
                            onSubmit={form.handleSubmit(onSubmit)}
                            className="space-y-10 w-96"
                        >
                            <FormField
                                control={form.control}
                                name="email"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormControl>
                                            <Input
                                                placeholder="Email..."
                                                {...field}
                                            />
                                        </FormControl>
                                        <FormMessage className="absolute text-xs" />
                                    </FormItem>
                                )}
                            />
                            <Button
                                type="submit"
                                className="w-full flex items-center"
                            >
                                <span>Tiếp Tục</span>
                                <ChevronRight />
                            </Button>
                        </form>
                    </Form>
                </CardContent>
                <CardFooter>
                    <div className="w-full flex flex-col gap-4">
                        <div className="flex items-center gap-2">
                            <Separator className="flex-1" />
                            <span className="text-muted-foreground text-xs">
                                hoặc
                            </span>
                            <Separator className="flex-1" />
                        </div>
                        <div className="flex gap-2">
                            <Button type="button" className="flex-1">
                                <FcGoogle />
                                <span>Google</span>
                            </Button>
                            <Button type="button" className="flex-1">
                                <FaFacebook className="text-sky-500" />
                                <span>Facebook</span>
                            </Button>
                        </div>
                        <div className="flex justify-center text-xs text-muted-foreground mt-5">
                            <Link href={'/sign-in'}>
                                Bạn chưa có tài khoản?{' '}
                                <span className="text-sky-500 underline">
                                    Đăng nhập
                                </span>
                            </Link>
                        </div>
                    </div>
                </CardFooter>
            </Card>
        </div>
    );
}
