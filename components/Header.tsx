import Link from "next/link";
import { Button } from "./ui/button";

export default function Header() {
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
						<Link href="/reservations">
							<Button variant="ghost" size="sm">
								My Reservations
							</Button>
						</Link>

						<Button variant="ghost" size="sm">
							Help
						</Button>

						<Button size="sm">Sign In</Button>
					</nav>
				</div>
			</div>
		</header>
	);
}
