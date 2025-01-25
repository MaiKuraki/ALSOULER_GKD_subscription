import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.google.android.apps.youtube.music',
  name: 'YouTube Music',
  groups: [
    {
      key: 1,
      name: '局部广告-播放界面广告',
      rules: [
        {
          fastQuery: true,
          activityIds:
            'com.google.android.apps.youtube.music.activities.MusicActivity',
          matches:
            '[id="com.google.android.apps.youtube.music:id/skip_ad_button"]',
          snapshotUrls: 'https://i.gkd.li/i/13196056',
        },
      ],
    },
    {
      key: 2,
      name: '全屏广告-会员广告',
      desc: '点击关闭',
      rules: [
        {
          fastQuery: true,
          activityIds: '.activities.MusicActivity',
          matches: '@[desc="Close"][visibleToUser=true] <<n [vid="custom"]',
          exampleUrls: 'https://e.gkd.li/42b2cb6d-b1e2-4cb1-84d8-399939263711',
          snapshotUrls: 'https://i.gkd.li/i/18542111',
        },
      ],
    },
  ],
});
