import {
	createContext,
	ReactNode,
	useContext,
	useState
} from "react";

type AppContextType = {
	isModalOpen: boolean;
	isSidebarOpen: boolean;
	openModal: () => void;
	openSidebar: () => void;
	closeModal: () => void;
	closeSidebar: () => void;
}

const AppContext = createContext<AppContextType>({} as AppContextType);

const AppProvider = ( { children }: {children: ReactNode} ) => {
	const [isSidebarOpen, setIsSidebarOpen] = useState(false);
	const [isModalOpen, setIsModalOpen] = useState(false);

	const openSidebar = () => {
		setIsSidebarOpen(true);
	}

	const closeSidebar = () => {
		setIsSidebarOpen(false);
	}

	const openModal = () => {
		setIsModalOpen(true);
	}

	const closeModal = () => {
		setIsModalOpen(false);
	}

	return <AppContext.Provider value={{
		isModalOpen,
		isSidebarOpen,
		openModal,
		openSidebar,
		closeModal,
		closeSidebar
	}}>
		{children}
	</AppContext.Provider>;
};

export const useGlobalContext = () => {
	return useContext(AppContext);
}

export { AppProvider }
