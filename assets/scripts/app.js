'use strict'

function createCountdown () {
  // set the date (Washington DC time)
  let electionDay = new Date('Nov 3, 2024 00:00:00')
  // returns time in ms since UNIX epoch, then convert to seconds
  electionDay = (Date.parse(electionDay) / 1000)

  // set current time, return time in ms since UNIX epoch
  let currentTime = new Date()
  currentTime = (Date.parse(currentTime) / 1000)

  // time between electionDay and currentTime in seconds
  const remainingTime = electionDay - currentTime

  // calculations for days/hours/minutes/seconds using Math.floor() which "returns the largest integer less than or equal to a given number"
  // days = seconds / 86400
  // hours = seconds / 3600
  // minutes = seconds / 60
  const days = Math.floor(remainingTime / 86400)
  const hours = Math.floor((remainingTime - (days * 86400)) / 3600)
  const minutes = Math.floor((remainingTime - (days * 86400) - (hours * 3600)) / 60)
  const seconds = Math.floor((remainingTime - (days * 86400) - (hours * 3600) - (minutes * 60)))

  // displays countdown info on the page using jQuery .html
  $('#days').html(days + '<span>Days</span>')
  $('#hours').html(hours + '<span>Hours</span>')
  $('#minutes').html(minutes + '<span>Minutes</span>')
  $('#seconds').html(seconds + '<span>Seconds</span>')

  // display message when countdown is over using .html
  if (remainingTime <= 0) {
    $('#message').html('<span>Countdown Over!</span>')
  }
}

// call function every second
setInterval(function () {
  createCountdown()
}, 1000)
