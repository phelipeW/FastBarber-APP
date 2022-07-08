/* eslint-disable no-console */
import Reactotron, { overlay } from 'reactotron-react-native';
export const reactotronConfigure = () => {
  // if (__DEV__) {
    const tron = Reactotron.configure()
      .useReactNative({
        networking: {
          ignoreUrls: /symbolicate|logs|socket.io/,
        },
      })
      .use(overlay())
      .use(reactotronRedux())
      .connect();

    console.tron = tron;

    tron.clear();
  // } else {
  //   console.tron = class {
  //     static log(...rest) {
  //       console.log(...rest);
  //     }
  //   };
  // }
};
