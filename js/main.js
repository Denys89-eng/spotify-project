let playListWrap = document.querySelector('.playlist__wrap')


let array = [
    {img: '1.png', author: 'Miley Cyrus', title: 'Flowers', timer: '3:20'},
    {img: '2.png', author: 'Sza', title: 'Kill Bill', timer: '2:23'},
    {img: '3.png', author: 'Steve Lacy', title: 'Bad Hab', timer: '3:47'},
    {img: '4.png', author: 'Mark Menday, Seb Mont', title: 'Talk To Me', timer: '2:10'},
    {img: '5.png', author: 'Olivia Rodrigo', title: 'Good 4 u', timer: '1:50'},
    {img: '6.png', author: 'Lil Nas X', title: 'industry baby', timer: '3:07'},
    {img: '7.png', author: 'Harry Styles', title: 'Watermelon Sugar', timer: '2:12'},
    {img: '8.png', author: 'Isak Daniels', title: 'Always', timer: '4:11'},
    {img: '8.png', author: 'Isak Daniels', title: 'Always', timer: '4:11'},
    {img: '8.png', author: 'Isak Daniels', title: 'Always', timer: '4:11'},
    {img: '8.png', author: 'Isak Daniels', title: 'Always', timer: '4:11'},
    {img: '8.png', author: 'Isak Daniels', title: 'Always', timer: '4:11'},
]


function numId() {
    let n = 0
    array.forEach((obj) => {
        let newLine = document.createElement('div')
        newLine.classList.add('playlist__line')

        let wrapContent = document.createElement('div')
        wrapContent.classList.add('wrap-content')
        wrapContent.style.width = '290px'
        wrapContent.style.display = 'flex'
        wrapContent.style.alignItems = 'center'
        wrapContent.style.gap = '20px'
        wrapContent.style.lineHeight = '20px'


        let newId = document.createElement('div')
        newId.classList.add('id')
        newId.style.width = '50px'
        newId.style.height = '50px'
        newId.style.padding = '15px 15px'
        newId.style.color = 'rgba(255,255,255,0.6)'
        newId.style.fontSize = '20px'
        newId.style.display = 'flex'
        newId.style.justifyContent = 'center'


        let playIconWrap = document.createElement('div')
        playIconWrap.classList.add('play-icon')
        playIconWrap.style.width = '50px'
        playIconWrap.style.height = '50px'
        playIconWrap.style.display = 'none'
        playIconWrap.style.cursor = 'pointer'


        let playIcon = document.createElement('img')
        playIcon.src = 'img/Vector.png'
        playIcon.alt = ''
        playIcon.style.width = '100%'
        playIcon.style.height = 'auto'


        playIconWrap.append(playIcon)


        let iconBlock = document.createElement('div')
        iconBlock.classList.add('icon-wrap')
        iconBlock.style.width = '50px'
        iconBlock.style.height = '50px'
        iconBlock.style.borderRadius = '10px'
        n++
        let icon = document.createElement('img')
        icon.src = `img/play${obj.img}`
        icon.alt = ''
        icon.style.width = '100%'
        icon.style.height = 'auto'


        let mainContent = document.createElement('div')
        mainContent.classList.add('mini-wrap')
        mainContent.style.padding = '10px'


        let descrSong = document.createElement('p')
        descrSong.classList.add('p-blur')
        descrSong.innerHTML = obj.title
        descrSong.style.color = 'rgba(255,255,255,0.6)'
        descrSong.style.fontSize = '15px'

        let descrSongTwo = document.createElement('p')
        descrSongTwo.classList.add('p-clear')
        descrSongTwo.innerHTML = obj.title
        descrSongTwo.style.color = 'white'


        let musicDescrWrap = document.createElement('div')
        musicDescrWrap.style.width = '200px'
        let artists = document.createElement('p')
        artists.innerHTML = 'Artists'
        artists.style.color = 'rgba(255,255,255,0.6)'
        let authorName = document.createElement('p')
        authorName.innerHTML = obj.author
        authorName.style.color = 'white'


        let timerWrap = document.createElement('div')
        timerWrap.classList.add('timer-wrap')
        timerWrap.style.width = '100px'
        let timer = document.createElement('p')
        timer.style.color = 'rgba(255,255,255,0.6)'
        timer.innerHTML = 'Time:'
        timer.style.fontSize = '15px'
        let time = document.createElement('p')
        time.style.color = 'white'
        time.innerHTML = obj.timer


        let settingsWrap = document.createElement('div')
        settingsWrap.style.width = '140px'
        settingsWrap.style.display = 'none'
        settingsWrap.style.justifyContent = 'space-between'
        settingsWrap.style.gap = '10px'
        settingsWrap.style.padding = '10px'


        let likeImg = document.createElement('img')
        likeImg.style.width = '30px'
        likeImg.style.height = '30px'

        likeImg.src = 'img/Group.png'


        let dotsImg = document.createElement('img')
        dotsImg.classList.add('options')
        dotsImg.style.width = '30px'
        dotsImg.style.height = '30px'
        dotsImg.src = 'img/more-menu-vertical-line.png'

        dotsImg.addEventListener('click', dotsShow)

        function dotsShow() {
            let positionTop = dotsImg.offsetTop
            let positionLeft = dotsImg.offsetLeft

            let optionsAdditional = document.createElement('div')
            optionsAdditional.classList.add('options-hover')
            optionsAdditional.style.width = '100px'
            optionsAdditional.style.height = '300px'
            optionsAdditional.style.background = '#292929'
            optionsAdditional.style.borderRadius = '10px'
            optionsAdditional.style.boxShadow = '0 0 6px black'
            optionsAdditional.style.position = 'absolute'
            optionsAdditional.style.top = `${positionTop + 10}px`
            optionsAdditional.style.left = `${positionLeft + 10}px`

            document.body.append(optionsAdditional)

            optionsAdditional.addEventListener('mouseleave', function () {
                optionsAdditional.remove()
            })



        }


        settingsWrap.append(likeImg, dotsImg)


        let span = document.createElement('span')
        span.innerHTML = `0${n}`

        iconBlock.append(icon)
        timerWrap.append(timer, time)
        musicDescrWrap.append(artists, authorName)


        mainContent.append(descrSong, descrSongTwo)
        wrapContent.append(newId, iconBlock, mainContent)
        newId.append(span, playIconWrap)

        newLine.append(wrapContent, musicDescrWrap, timerWrap, settingsWrap)
        playListWrap.append(newLine)

    })
    let line = document.querySelectorAll('.playlist__line')

    line.forEach(function (elem) {
        elem.addEventListener('click', function (e) {
            let idEl = elem.firstChild.firstChild.firstChild
            let playIconEl = elem.firstChild.firstChild.lastChild

            line.forEach(function (val) {

                let idVal = val.firstChild.firstChild.firstChild
                let playIconVal = val.firstChild.firstChild.lastChild

                val.lastChild.style.display = 'none'
                idVal.style.display = 'flex'
                playIconVal.style.display = 'none'
                val.classList.remove('active')
            })

            idEl.style.display = 'none'
            playIconEl.style.display = 'block'
            elem.lastChild.style.display = 'flex'
            elem.classList.add('active')
            elem.style.transition = '.5s'


        })


    })
}

numId()


let account = document.querySelector('.header__account')

account.addEventListener('mouseenter', accountEnter)
account.addEventListener('mouseleave', accountLeave)

function accountEnter() {

    let posTop = account.offsetTop
    let posLeft = account.offsetLeft

    let name = document.createElement('div')
    name.classList.add('account-hover')
    name.style.width = 'max-content'
    name.style.height = '30px'
    name.style.background = 'black'
    name.style.position = 'absolute'
    name.style.top = `${posTop + 50}px`
    name.style.left = `${posLeft + 50}px`
    name.style.color = 'white'
    name.style.padding = '6px 20px'
    name.innerHTML = 'Julita Gomez'
    name.style.borderRadius = '10px'

    account.append(name)
}

function accountLeave() {
    let accountHover = document.querySelector('.account-hover')
    accountHover.remove()
}
