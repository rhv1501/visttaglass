import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full bg-brand-white pt-24 pb-12 border-t border-brand-grey/30">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 mb-24">
          <div className="md:col-span-2">
            <Link href="/" className="text-2xl font-bold tracking-tighter text-brand-navy block mb-6">
              VISTTA<span className="text-brand-teal">.</span>
            </Link>
            <p className="text-brand-navy/60 max-w-sm">
              Luxury architectural glass and window solutions for modern spaces in Chennai and Tamil Nadu.
            </p>
          </div>
          
          <div>
            <h4 className="text-brand-navy font-bold uppercase tracking-wider text-sm mb-6">Services</h4>
            <ul className="space-y-4">
              <li><Link href="/aluminium-windows-chennai" className="text-brand-navy/60 hover:text-brand-teal transition-colors">Aluminium Windows</Link></li>
              <li><Link href="/upvc-windows-chennai" className="text-brand-navy/60 hover:text-brand-teal transition-colors">uPVC Windows</Link></li>
              <li><Link href="/toughened-glass-chennai" className="text-brand-navy/60 hover:text-brand-teal transition-colors">Toughened Glass</Link></li>
              <li><Link href="/glass-partitions-chennai" className="text-brand-navy/60 hover:text-brand-teal transition-colors">Glass Partitions</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-brand-navy font-bold uppercase tracking-wider text-sm mb-6">Contact</h4>
            <ul className="space-y-4 text-brand-navy/60">
              <li>Door No.49, Old, Maddox St,</li>
              <li>Periyamedu, Choolai,</li>
              <li>Chennai, Tamil Nadu 600112</li>
              <li className="pt-4">hello@visttaglass.com</li>
              <li>+91 98403 96462</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-brand-grey/30 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-brand-navy/40 text-sm">
            &copy; {new Date().getFullYear()} Vistta Glass. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-brand-navy/40">
            <Link href="/privacy-policy" className="hover:text-brand-navy transition-colors">Privacy Policy</Link>
            <Link href="/terms-of-service" className="hover:text-brand-navy transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
