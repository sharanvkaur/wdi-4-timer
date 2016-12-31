// Create Javascript selectors that target each of the timer buttons.
// Create click handlers (empty, for now) for each of the timer buttons.
// $('button').click(function () {
//   $(this).css('color', 'yellow')
//   $(this).html('bloop')
// })
var seconds = 0
var running = 'off'
var timer

$('#start').on('click', startClick)
$('#pause').on('click', pauseClick)
$('#reset').on('click', resetClick)

function startClick () {
  if (seconds === 0)
    $('#timer').text('Time elapsed: 0 seconds')
    console.log('counter is ' + running)
  if (running === 'off') {
    timer = setInterval(timerAdd, 1000)
    running = 'on'
    $('#pause').text('Pause')

    console.log('timer running')
  }
}
function timerAdd () {
  console.log('adding seconds')
  seconds++
  timerUpdate()
}
function timerUpdate () {
  $('#timer').text('Time elapsed: ' + seconds + ' seconds')
}


function pauseClick () {
  console.log('pause button pressed')
  switch (running) {
    case 'on':
    console.log('paused')
    clearInterval(timer)
    running = "off"
    console.log('running is paused')
    $('#pause').text('Resume')
    break
    case 'off':
    console.log('unpausing')
    timer = setInterval(timerAdd, 1000)
    running = "on"
    console.log('timer is running')
    $('#pause').text('Pause')
    break
  }
}

function resetClick () {
  console.log('reset pressed')
  clearInterval(timer)
  $('#timer').text('Stopwatch')
  running = 'off'
  seconds = 0
}
