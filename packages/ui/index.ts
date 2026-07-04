import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Button placeholder to be replaced with shadcn/ui button
export const Button = ({ children, className, ...props }: React.ButtonHTMLAttributes<HTMLButtonElement>) => {
  return (
    <button className={cn('px-4 py-2 bg-blue-600 text-white rounded-lg', className)} {...props}>
      {children}
    </button>
  );
};
