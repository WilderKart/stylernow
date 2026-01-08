import Link from 'next/link';

export function LegalLinks() {
    return (
        <div className="flex space-x-4 text-xs text-secondary-text/60">
            <Link href="/terminos" className="hover:text-primary-accent underline transition-colors">Términos y Condiciones</Link>
            <Link href="/privacidad" className="hover:text-primary-accent underline transition-colors">Política de Privacidad</Link>
        </div>
    );
}

export function ContactInfo() {
    return (
        <p className="text-xs text-secondary-text/60 font-medium">
            Stylernow — The operating system for modern barbershops.
        </p>
    );
}
