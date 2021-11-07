# scream-on-unsafe README

Screams when you write `unsafe` on Rust.

<blockquote class="twitter-tweet" data-partner="tweetdeck"><p lang="und" dir="ltr"><a href="https://t.co/xydpm2uE6p">https://t.co/xydpm2uE6p</a> <a href="https://t.co/JhFIQ39XHK">pic.twitter.com/JhFIQ39XHK</a></p>&mdash; Yuki Okushi (@fr4ternite) <a href="https://twitter.com/fr4ternite/status/1457143048345772038?ref_src=twsrc%5Etfw">November 7, 2021</a></blockquote>

## Configuration

`audioExec` has to be specified, this extension will run it when finding `unsafe`.

E.g. on Windows:

```poweshell
powershell -c (New-Object Media.SoundPlayer 'scream.wav').PlaySync()
```

## License

MIT

## Thanks

Big thanks to [@yoshuawuyts](https://github.com/yoshuawuyts) for the idea.
