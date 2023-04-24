import { ipcMain } from 'electron'

ipcMain.handle('fetch-documents', async () => {
  return [
    { id: 1, title: 'NodeJS' },
    { id: 2, title: 'Electron' },
    { id: 3, title: 'ReactJS' },
    { id: 4, title: 'Python' },
  ]
})
