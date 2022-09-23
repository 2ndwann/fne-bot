from mcstatus import JavaServer

server = JavaServer.lookup('0.0.0.0:25565')
data = server.status().latency

print(data)
