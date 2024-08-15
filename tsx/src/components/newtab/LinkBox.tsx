

const LinkBox = () => {


    return (
        <div className="bg-gray-200/30 backdrop-blur-md px-5 py-2 rounded-md text-lg w-1/3 max-[2260px]:w-2/5 max-[1860px]:w-3/5 max-[1170px]:w-4/5 max-[880px]:w-11/12">
            <div className="grid grid-cols-8 max-md:grid-cols-4 justify-center place-items-center">
                <a target="_blank" href="https://reddit.com">Reddit</a>
                <a target="_blank" href="https://github.com">GitHub</a>
                <a target="_blank" href="https://mail.google.com">Gmail</a>
                <a target="_blank" href="https://messenger.com">Messenger</a>
                <a target="_blank" href="https://messages.google.com">Messages</a>
                <a target="_blank" href="https://omni.se">Omni</a>
                <a target="_blank" href="https://sweclockers.com">Sweclockers</a>
                <a target="_blank" href="https://youtube.com">YouTube</a>
                <a target="_blank" href="https://twitch.tv">Twitch</a>
                <a target="_blank" href="https://netflix.com">Netflix</a>
                <a target="_blank" href="https://disneyplus.se">Disney</a>
                <a target="_blank" href="https://hbomax.com">HBO Max</a>
                <a target="_blank" href="https://jellyfin.bjorntp.com">Jellyfin</a>
                <a target="_blank" href="https://rutorrent.bjorntp.com">ruTorrent</a>
                <a target="_blank" href="https://sonarr.bjorntp.com">Sonarr</a>
                <a target="_blank" href="https://nextcloud.bjorntp.com">Nextcloud</a>
            </div>
        </div>
    )
}

export default LinkBox;