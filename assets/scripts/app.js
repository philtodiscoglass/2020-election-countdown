'use strict'

function createCountdown() {

  // set the date (Washington DC time)
let electionDay = new Date('Nov 3, 2020 00:00:00')
  // returns time in ms since UNIX epoch, then convert to seconds
  electionDay = (Date.parse(electionDay) / 1000)

  // set current time, return time in ms since UNIX epoch, then convert to seconds
  let currentTime = new Date()
  currentTime = (Date.parse(currentTime) / 1000)
}
