const author = "Tanmaydeep Singh";
const description =
	"Software developer from Moldova, Republic of, who loves to develop beautiful websites, single page applications, customer relationship management or code from scratch using React and Next.js";
const url = "https://tanmaydeep-singh.netlify.app";
export const AppMetadata = {
	metadataBase: new URL("https://tanmaydeep-singh.netlify.app/"),
	title: {
		default: `Portfolio | ${author}`,
		template: `%s | ${author}`
	},
	description: description,
	
	creator: author,
	authors: [{ name: author, url: url }],
	colorScheme: "dark",
	openGraph: {
		title: `${author} | Portfolio`,
		description: description,
		url: url,
		siteName: `${author} | Portfolio`,
		locale: "en-IN",
		type: "website"
	}
};
