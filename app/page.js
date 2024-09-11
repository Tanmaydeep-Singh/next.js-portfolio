"use client";

import { WelcomeSection, AboutSection, TechnologiesSection, ProjectSection } from "app/sections";

export default function Page() {
	return (
		<div className="container-md">
			<WelcomeSection />
			<AboutSection />
			<TechnologiesSection />
			<ProjectSection/>
		</div>
	);
}
