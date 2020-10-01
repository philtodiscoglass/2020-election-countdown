'use strict'

function createCountdown () {
  // set the date (Washington DC time)
let electionDay = new Date('Nov 3, 2020 00:00:00')
  // returns time in ms since UNIX epoch, then convert to seconds
  electionDay = (Date.parse(electionDay) / 1000)

  // set current time, return time in ms since UNIX epoch
  let currentTime = new Date()
  currentTime= (Date.parse(currentTime) / 1000)

  // time between electionDay and currentTime in seconds
  let remainingTime = electionDay - currentTime

  // calculations for days/hours/minutes/seconds using Math.floor() which "returns the largest integer less than or equal to a given number"
  // days = seconds / 86400
  // hours = seconds / 3600
  // minutes = seconds / 60
  let days = Math.floor(remainingTime / 86400);
  let hours = Math.floor((remainingTime - (days * 86400)) / 3600)
  let minutes = Math.floor((remainingTime - (days * 86400) - (hours * 3600)) / 60)
  let seconds = Math.floor((remainingTime - (days * 86400) - (hours * 3600) - (minutes * 60)))
}
createCountdown()
