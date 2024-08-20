
import { LazyMotion, domAnimation } from "framer-motion";
import { HeadingDivider, Project } from "components";


export function ProjectSection() {

	return (
		<LazyMotion features={domAnimation}>
			<section id="about" className="section">
				<HeadingDivider title="Projects" />
				<div className="pt-10 pb-16 max-w-5xl flex flex-col gap-3">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                
        </div></div>

			</section>
		</LazyMotion>
	);
}
