import { useState } from "react";

function App() {
  const [port, setPort] = useState(null);
  const [arduino, setArudino] = useState(null);

  const handleSearchPort = async () => {
    // const _requsetPorts = await navigator.serial.requestPort();
    // console.log("requestPort", _requsetPorts);

    const _ports = await navigator.serial.getPorts();
    console.log(_ports);
    setPort(_ports[_ports.length - 1]);

    // console.log("getPort", _ports);
    // console.log(navigator.serial.);

    // setPort(_ports);
  };
  const handleConnectButton = async () => {
    const _arduino = await port.open({ baudRate: 9600 });
    setArudino(_arduino);
  };
  const handleSerialWriteButton = async () => {
    console.log(port);
    const _writer = port.writable.getWriter();
    console.log(_writer);
    const _data = new TextEncoder().encode("1 6000" + "\n");
    await _writer.write(_data);
    _writer.releaseLock();
    console.log(port.getInfo());
  };
  const handleDisconnectButton = async () => {};
  return (
    <div className="App">
      <button onClick={() => handleSearchPort()}>포트 찾기</button>
      <button onClick={() => handleConnectButton()}>연결</button>
      <button onClick={() => handleSerialWriteButton()}>보내기</button>
    </div>
  );
}

export default App;
