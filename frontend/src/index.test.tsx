import ReactDOM from 'react-dom/client'

import './index.tsx'

jest.mock('react-dom/client', () => ({
  createRoot: jest.fn().mockImplementation(() => ({
    render: jest.fn(),
  })),
}))

describe('Root app', () => {
  it('should render component with react DOM', () => {
    const div = document.createElement('div')
    div.id = 'root'
    document.body.appendChild(div)

    expect(ReactDOM.createRoot).toHaveBeenCalledTimes(1)
  })
})
