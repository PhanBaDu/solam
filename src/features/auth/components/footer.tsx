import { Link } from '@/i18n/routing';
import { Copyright, ShieldPlus } from 'lucide-react';

export default function Footer() {
    return (
        <div className="flex items-center justify-between py-4 text-muted-foreground text-xs">
            <div className="flex items-center gap-2">
                <ShieldPlus size={16} />
                <Link href={'#'} className="hover:text-primary duration-150">
                    Chính sách bảo mật
                </Link>
            </div>
            <div className="flex items-center gap-2">
                <Copyright size={16} />
                <span>2024 - Bản quyền thuộc về teams</span>
            </div>
        </div>
    );
}
