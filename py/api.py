# import zerorpc

# class HelloRPC(object):
#     def hello(self, name):
#         return "Hello, %s" % name

# s = zerorpc.Server(HelloRPC())
# s.bind("tcp://0.0.0.0:4242")
# s.run()

import zmq

context = zmq.Context()
socket = contex.socket(zmq.REQ)
socket.connect("tcp://127.0.0.1:5502")

for counter in range(0, 100001):
    socket.send(b"hello")
    message = socket.recv()

    if counter % 1000 == 0:
        print(message, counter)