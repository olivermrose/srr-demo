"use client";

import Link from "next/link";
import { Button } from "./ui/button";
import { authClient } from "@/lib/auth-client";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { ChevronRight } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

export default function Header() {
	const { data } = authClient.useSession();

	return (
		<header className="border-b border-border bg-card">
			<div className="container mx-auto px-4 py-4">
				<div className="flex items-center justify-between">
					<a className="flex items-center gap-x-2" href="/">
						<div className="size-8 rounded-md bg-primary flex items-center justify-center">
							<span className="text-primary-foreground font-bold text-sm">SR</span>
						</div>

						<h1 className="text-xl font-semibold text-foreground">StudyRoom</h1>
					</a>

					<div className="flex items-center gap-x-2">
						{data?.user ? (
							<DropdownMenu>
								<DropdownMenuTrigger className="flex group items-center">
									<span className="text-sm font-medium">{data.user.name}</span>
									<ChevronRight className="ml-1 size-4 group-data-[state=open]:rotate-90 transition-[rotate]" />
								</DropdownMenuTrigger>

								<DropdownMenuContent>
									<DropdownMenuLabel>{data.user.email}</DropdownMenuLabel>

									<DropdownMenuItem>
										<Link href="/reservations">My Reservations</Link>
									</DropdownMenuItem>

									<DropdownMenuSeparator />

									<DropdownMenuItem onClick={() => authClient.signOut()}>
										Sign Out
									</DropdownMenuItem>
								</DropdownMenuContent>
							</DropdownMenu>
						) : (
							<Button
								size="sm"
								onClick={() => authClient.signIn.social({ provider: "microsoft" })}
							>
								Sign In
							</Button>
						)}

						<div className="h-6 w-px bg-border"></div>

						<ThemeToggle />
					</div>
				</div>
			</div>
		</header>
	);
}
