import { ChatTeardropDots } from "phosphor-react";
import { Popover } from "@headlessui/react"; //tem integração com tailwind

export function Widget() {
	return (
		<Popover>
			<Popover.Panel>
				<p>hello word</p>
			</Popover.Panel>
			<Popover.Button className=" flex items-center bg-brand-500 rounded-full h-12 p-3  group">
				<ChatTeardropDots className="w-6 h-6 text-white" />
				<span className="text-white max-w-0 overflow-hidden group-hover:max-w-xs group-hover:ml-2 transition-all duration-500">
					Feedback
				</span>
			</Popover.Button>
		</Popover>
	);
}
