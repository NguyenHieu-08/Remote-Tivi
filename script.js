const Remote = function (id) {
    this.id = id;

    this.switchChannel = function (tivi) {
        let no = +prompt('Enter Chanel want to switch:');
        if (no >= 1 && no <= 10) {
            tivi.channel = no;
        } else {
            alert('Channel dont exist')
        }
        return `Switch ${tivi.channel}`
    }

    this.getVolume = function (volume) {
        this.volume = volume;
    }
}

const TiVi = function (channel, volume, status) {
    this.channel = channel;
    this.volume = volume;
    this.status = status;

    this.getChannel = function () {
        alert('Tivi on:' + this.channel + "channel")
        return this.channel;
    }

    this.isOn = function () {
        alert('Tivi On');
        this.status = true;
    }

    this.isOff = function () {
        alert('Tivi Off');
        this.status = false;
    }

    this.getVolume = function () {
        alert('Volume:' + this.volume)
        return this.volume;
    }

    this.changeVolume = function () {
        let volumeC = +prompt('Enter volume:')
        if (volumeC >= 0 && volumeC <= 100) {
            this.volume = volumeC;
        }
    }

    this.changeChannel = function (remote) {
        remote.switchChannel(this)
    }
}

const remote = new Remote(1);
const tivi = new TiVi(3, 50, true);

tivi.changeChannel(remote)
tivi.changeVolume();
tivi.isOff();