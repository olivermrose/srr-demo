import { useTheme } from "next-themes";
import { useCallback, useEffect, useState } from "react";
import { Button } from "./ui/button";
import { Moon, Sun } from "lucide-react";

export default function ThemeToggle() {
	const [mounted, setMounted] = useState(false);
	const { resolvedTheme, setTheme } = useTheme();

	useEffect(() => {
		setMounted(true);
	}, []);

	const toggleTheme = useCallback(() => {
		setTheme(resolvedTheme === "dark" ? "light" : "dark");
	}, [resolvedTheme, setTheme]);

	return mounted ? (
		<Button size="icon" variant="ghost" onClick={toggleTheme}>
			{resolvedTheme === "dark" ? <Moon /> : <Sun />}
		</Button>
	) : null;
}
