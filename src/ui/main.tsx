import { Component, createSignal, Show } from "solid-js";
import { Motion } from "@motionone/solid";
import { BiRegularMenu, BiRegularWindowClose } from "solid-icons/bi";

const Select: Component = (props) => {
  const [selected, SetSelected] = createSignal("Select Something");
  return (
    <select
      class="transition-all p-2 m-2 bg-slate-700 outline-none text-slate-50 rounded-xl focus:ring-2 focus:ring-sky-500/50 hover:bg-slate-800"
      value={selected()}
      onChange={(e) => SetSelected(e.currentTarget.value)}
    >
      {props.children}
    </select>
  );
};

const Button: Component = (props) => {
  return (
    <button class="transition-all inline-block p-2 bg-slate-700 outline-none text-slate-50 rounded-xl focus:ring-2 focus:ring-sky-500/50 hover:bg-slate-800 active:scale-90">
      {props.children}
    </button>
  );
};

const [open, SetOpen] = createSignal(false);

const DrawerMenu: Component = () => {
  return (
    <button
      class="flex items-center justify-center outline-none transition-all p-2 bg-slate-600 text-slate-50 rounded-xl focus:ring-2 focus:ring-sky-500/50 hover:bg-slate-7z00 active:scale-90 w-12 h-12"
      onClick={() => SetOpen(true)}
    >
      <BiRegularMenu font-size="24" />
    </button>
  );
};

const Drawer: Component = (props) => {
  return (
    <Show when={open()}>
      <Motion
        animate={{ x: [-400, 0], opacity: [0, 100] }}
        transition={{ easing: "ease", duration: 0.5 }}
      >
        <div class="1/3 fixed flex flex-col gap-2 m-3 z-[2] text-slate-50 bg-slate-800 p-3 shadow-xl rounded-2xl">
          <button
            class="flex gap-2 w-full items-center justify-center outline-none transition-all p-2 bg-slate-700 text-slate-50 rounded-xl focus:ring-2 focus:ring-sky-500/50 hover:bg-slate-7z00 active:scale-90"
            onClick={() => SetOpen(false)}
          >
            <BiRegularWindowClose /> Close
          </button>
          {props.children}
        </div>
      </Motion>
    </Show>
  );
};

const Drawer_Button: Component = (props) => {
  return (
    <button class="flex gap-2 w-full items-center justify-center outline-none transition-all p-2 bg-slate-700 text-slate-50 rounded-xl focus:ring-2 focus:ring-sky-500/50 hover:bg-slate-7z00 active:scale-90">
      {props.children}
    </button>
  );
};

const Nav_Brand: Component = (props) => {
  return <h1 class="font-semibold text-2xl">{props.children}</h1>;
};

const Navbar: Component = (props) => {
  return (
    <div class="bg-slate-800 flex flex-row items-center gap-2 text-slate-50 shadow-md p-2 w-screen">
      {props.children}
    </div>
  );
};

const Content: Component = (props) => {
  return <main class="p-2">{props.children}</main>;
};

const FlexContent: Component = (props) => {
  return <div class="h-auto w-full flex flex-row ">{props.children}</div>;
};

const FlowContent: Component = (props) => {
  return (
    <main class="flex flex-grow m-2 p-2 rounded-xl bg-slate-800 border-2 border-slate-500/50">
      {props.children}
    </main>
  );
};

const Main: Component = (props) => {
  return <main class="z-0 bg-slate-900 h-screen">{props.children}</main>;
};

export {
  Select,
  Button,
  Drawer,
  DrawerMenu,
  Nav_Brand,
  Navbar,
  Content,
  FlexContent,
  FlowContent,
  Main,
  Drawer_Button,
};
