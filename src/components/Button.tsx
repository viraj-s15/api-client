import { Component, ComponentProps } from "solid-js";

interface ButtonProps extends ComponentProps<any> {
  onClick: (event: MouseEvent) => void;
  label: string;
  icon: string;
  type?: "reset" | "submit" | "button";
}

const Button: Component<ButtonProps> = ({ onClick, label, icon, type }) => {
  return (
    <button
      onclick={onClick}
      role="button"
      type={type || "button"}
      title={label}
      class="w-7 h-7 flex transition-all ease-in-out duration-100 hover:scale-125 items-center justify-center text-white bg-blue-600 border border-blue-600 rounded-full hover:bg-blue-700 active:text-white focus:outline-none focus:ring"
    >
      <span class="sr-only">{label}</span>
      <ion-icon name={icon}></ion-icon>
    </button>
  );
};

export default Button;
