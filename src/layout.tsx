import { Link, useLocation } from "react-router-dom";
import { withRef } from "@udecode/react-utils";
import { cn } from "@udecode/cn";

import type { PropsWithChildren } from "react";

const NavLink = withRef<typeof Link>(
	({ to, className, ...props }, reference) => {
		const pathname = useLocation().pathname;
		const isActive = pathname === to;

		return (
			<Link
				ref={reference}
				to={to}
				className={cn(
					"pb-4 text-neutral-400 border-b-2 border-transparent transition-all hover:border-neutral-400 hover:text-neutral-300",
					isActive && "!border-pink-400 !text-neutral-50 font-medium",
					className
				)}
				{...props}
			/>
		);
	}
);

export default function Layout({ children }: PropsWithChildren) {
	return (
		<main
			className="flex min-h-screen w-full select-none flex-col bg-neutral-950"
			vaul-drawer-wrapper=""
		>
			<nav className="sticky -top-14 flex flex-col border-b border-neutral-800 bg-neutral-950">
				<div className="flex w-full flex-row items-center gap-2 p-4">
					<img alt="enterlink" className="size-10" src="/logo.webp" />
					<h1 className="text-lg font-semibold">enterlink</h1>
					<p className="mb-1 text-sm text-neutral-400">policies</p>
				</div>
				<div className="flex flex-row gap-4 px-4 pb-0">
					<NavLink to="/">Privacy Policy</NavLink>
					<NavLink to="/terms">Terms of Service</NavLink>
				</div>
			</nav>
			<div className="flex w-full justify-center sm:py-16">
				<div className="flex w-full max-w-5xl justify-center bg-neutral-900 px-4 py-16 shadow-lg">
					<article className="prose prose-neutral prose-invert w-full max-w-4xl select-text">
						{children}
					</article>
				</div>
			</div>
		</main>
	);
}
