api.jstpTest = {
  host: '127.0.0.1',
  ports: [6000],
  connect: (cb, port = api.jstpTest.ports[0]) => api.jstp.ws.connectAndInspect(
    'example',
    null,
    ['interfaceName'],
    {},
    `ws://${api.jstpTest.host}:${port}`,
    cb
  ),
};
