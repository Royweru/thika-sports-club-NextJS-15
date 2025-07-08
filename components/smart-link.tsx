'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { ComponentProps, ReactNode } from 'react';

interface SmartLinkProps {
  href: string;
  children: ReactNode;
  className?: string;
  replace?: boolean;
  scroll?: boolean;
  prefetch?: boolean;
}

const SmartLink = ({ 
  href, 
  children, 
  className = 'cursor-pointer', 
  replace = false,
  scroll = true,
  prefetch = true,
  ...props 
}: SmartLinkProps) => {
  const router = useRouter();
  
  // Check if it's an anchor link or external page
  const isAnchorLink = href.startsWith('#');
  const isHomePage = href === '/';
  const isExternalPage = !isAnchorLink && !isHomePage;
  
  // For external pages, use router.replace to avoid hash history issues
  if (isExternalPage) {
    const handleClick = () => {
      if (replace) {
        router.replace(href, { scroll });
      } else {
        // Check if we're currently on a page with hash and clear it
        if (window.location.hash) {
          router.replace(href, { scroll });
        } else {
          router.push(href, { scroll });
        }
      }
    };

    return (
      <button
        onClick={handleClick}
        className={className}
        type="button"
        {...props}
      >
        {children}
      </button>
    );
  }
  
  // For anchor links and home page, use regular Link
  return (
    <Link 
      href={href} 
      className={className} 
      scroll={scroll}
      prefetch={prefetch}
      {...props}
    >
      {children}
    </Link>
  );
};

export default SmartLink;