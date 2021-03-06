{
  enabled: true,
  keepDays: 100, // Delete files after N days
  writeInterval: Duration('3s'), // Flush log to disk interval
  writeBuffer: 64 * 1024, // Buffer size 64kb
  toFile: [
    'system', 'fatal', 'error', 'warn', 'info', 'debug', 'access', 'slow'
  ],
  toStdout: ['system', 'fatal', 'error', 'warn', 'debug']
}
