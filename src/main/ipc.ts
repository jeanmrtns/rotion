import { ipcMain } from 'electron'
import { IPC } from '@shared/constants/ipc'
import { FetchAllDocumentsResponse } from '@shared/types/ipc'

ipcMain.handle(
  IPC.DOCUMENTS.FETCH_ALL,
  async (): Promise<FetchAllDocumentsResponse> => {
    return {
      data: {
        documents: [
          { id: '1', title: 'NodeJS', content: '' },
          { id: '2', title: 'Electron', content: '' },
          { id: '3', title: 'ReactJS', content: '' },
          { id: '4', title: 'Python', content: '' },
        ],
      },
    }
  },
)
