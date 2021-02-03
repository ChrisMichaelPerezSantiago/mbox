import React from "react";
import { Dimensions, StyleSheet, View } from "react-native";
import _ from "lodash";
import { WebView } from "react-native-webview";

const { height } = Dimensions.get("window");

const MovieVideo = ({ route }) => {
  const { params } = route;
  const { torrent_magnet } = _.pick(params.magnetSelected, ["torrent_magnet"]);

  //console.log(torrent_magnet);

  const runFirst = `
      window.isNativeApp = true;
      true; // note: this is required, or you'll sometimes get silent failures
    `;

  const html = `
    <html>
    <head>
        <meta charset="utf-8">
        <meta content="width=device-width, initial-scale=1" name="viewport">
        <meta content="ie=edge" http-equiv="x-ua-compatible">
    </head>
    <body>
      <div id="player"></div>
        <script>
        window.webtor = window.webtor || [];
        window.webtor.push({
          id: 'player',
          magnet: '${torrent_magnet}',
          width: '100%',
          height: '100%',
          on: function (e) {
            if (e.name == window.webtor.TORRENT_FETCHED) {
              console.log('Torrent fetched!', e.data);
            }
            if (e.name == window.webtor.TORRENT_ERROR) {
              console.log('Torrent error!');
            }
          },
          i18n: {
            en: {
              common: {
                "prepare to play": "Preparing Video Stream... Please Wait...",
              },
              stat: {
                "seeding": "Seeding",
                "waiting": "Client initialization",
                "waiting for peers": "Waiting for peers",
                "from": "from",
              },
            },
          },
        });
        </script>
        <script src="https://cdn.jsdelivr.net/npm/@webtor/player-sdk-js@0.2.12/dist/index.min.js" charset="utf-8"></script>
    </body>
    </html>
  `;

  return (
    <View style={styles.container}>
      <WebView
        source={{ html }}
        injectedJavaScriptBeforeContentLoaded={runFirst}
        javaScriptEnabled={true}
        scrollEnabled={false}
        allowsFullscreenVideo={true}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: (height - 300) / 2,
  },
});

export default MovieVideo;
