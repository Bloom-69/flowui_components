import {
  Button,
  Content,
  DrawerMenu,
  Nav_Brand,
  Navbar,
  Select,
  Main,
  Drawer,
  Drawer_Button,
  FlexContent,
  FlowContent,
} from "./ui/main";

function App() {
  return (
    <Main class="bg-slate-900 h-screen">
      <Drawer>
        <Drawer_Button>Home</Drawer_Button>
      </Drawer>
      <Navbar>
        <DrawerMenu />
        <Nav_Brand>FlowUI</Nav_Brand>
      </Navbar>
      <Content>
        <Select>
          <option value="One">One</option>
        </Select>
        <Button>Test</Button>
      </Content>
      <FlexContent>
        <FlowContent>
          <Button>One</Button>
        </FlowContent>
        <FlowContent>
          <Button>Two</Button>
        </FlowContent>
      </FlexContent>
    </Main>
  );
}

export default App;
