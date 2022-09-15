import logo from './logo.svg';
import { FaTimes } from "react-icons/fa";
import { ILink, links, social } from "./data";
import { useGlobalContext } from "./context";

function Sidebar() {
	const { isSidebarOpen, closeSidebar } = useGlobalContext();

	return (
		<aside className={`${
			isSidebarOpen ? 'sidebar show-sidebar' : 'sidebar'
		}`}>
			<div className="sidebar-header">
				<img src={logo} className="logo" alt="logo"/>
				<button
					className="close-btn"
					onClick={closeSidebar}>
					<FaTimes/>
				</button>
			</div>
			<ul className="links">
				{links.map((link: ILink) => {
					const { id, url, text, icon } = link;
					return (
						<li key={id}>
							<a href={url}>
								{icon}
								{text}
							</a>
						</li>
					);
				})}
			</ul>
			<ul className="social-icons">
				{social.map((link: ILink) => {
					return (
						<li key={link.id}>
							<a href={link.url}>
								{link.icon}
							</a>
						</li>
					);
				})}
			</ul>
		</aside>
	);
}

export default Sidebar;

