const { ServerInterceptingCall } = require("@grpc/grpc-js");

const AllowedApis = new Set([
    "0.0.0.0",
    "127.0.0.1"
]);

function whiteList(methodDescriptor: any, call: any) {
    return new ServerInterceptingCall(call, {
        start: (next: any) => {
            next({
                onReceiveMetadata: (metadata: any, nextMetadata: any) => {
                    const method = metadata.get("ip-address")[0];
                    console.log(method);
                    console.log(!AllowedApis.has(method));
                    if (!AllowedApis.has(method)) {
                        console.log("entered allowapi");
                        call.sendStatus({
                            details: `Method '${method}' is not whitelisted`,
                            code: 7,
                        });
                        return;
                    }
                    nextMetadata(metadata);
                },
                onReceiveMessage: (message: any, nextMessage: any) => {
                    nextMessage(message);
                }
            });
        }
    });
}

module.exports = { whiteList };