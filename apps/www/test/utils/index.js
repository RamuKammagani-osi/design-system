module.exports.mkPathFn = function mkPathFn({
  proto = 'http',
  host = 'localhost',
  port,
}) {
  return path => `${proto}://${host}${port ? `:${port}` : ''}${path}`
}
