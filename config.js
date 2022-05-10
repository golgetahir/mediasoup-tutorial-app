module.exports = {
  listenIp: '0.0.0.0',
  listenPort: 3000,
  sslCrt: './server/ssl/fullchain.pem',
  sslKey: './server/ssl/privkey.pem',
  mediasoup: {
    // Worker settings
    worker: {
      rtcMinPort: 10000,
      rtcMaxPort: 10100,
      logLevel: 'warn',
      logTags: [
        'info',
        'ice',
        'dtls',
        'rtp',
        'srtp',
        'rtcp',
        // 'rtx',
        // 'bwe',
        // 'score',
        // 'simulcast',
        // 'svc'
      ],
    },
    // Router settings
    router: {
      mediaCodecs:
        [
          {
            kind: 'audio',
            mimeType: 'audio/opus',
            clockRate: 48000,
            channels: 2
          }
        ]
    },
    // WebRtcTransport settings
    webRtcTransport: {
      listenIps: [
        {
          ip: '192.168.1.108',
          announcedIp: null,
        }
      ],
      maxIncomingBitrate: 1500000,
      enableSctp : true,
      initialAvailableOutgoingBitrate: 1000000,
    }
  }
};
