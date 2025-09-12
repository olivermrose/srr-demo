"use client";

import Link from "next/link";
import { Button } from "./ui/button";
import { authClient } from "@/lib/auth-client";

export default function Header() {
	const { data } = authClient.useSession();

	return (
		<header className="fixed inset-x-0 border-b border-border bg-card">
			<div className="container mx-auto px-4 py-4">
				<div className="flex items-center justify-between">
					<div className="flex items-center space-x-2">
						<div className="h-8 w-8 rounded-md bg-primary flex items-center justify-center">
							<span className="text-primary-foreground font-bold text-sm">SR</span>
						</div>

						<h1 className="text-xl font-semibold text-foreground">StudyRoom</h1>
					</div>

					<nav className="flex items-center space-x-4">
						{data?.user && (
							<Link href="/reservations">
								<Button variant="ghost" size="sm">
									My Reservations
								</Button>
							</Link>
						)}

						<Button variant="ghost" size="sm">
							Help
						</Button>

						{data?.user ? (
							<Button size="sm" onClick={() => authClient.signOut()}>
								Sign Out
							</Button>
						) : (
							<Button
								size="sm"
								onClick={() => authClient.signIn.social({ provider: "microsoft" })}
							>
								Sign In
							</Button>
						)}
					</nav>
				</div>
			</div>
		</header>
	);
}
