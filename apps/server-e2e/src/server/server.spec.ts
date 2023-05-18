import axios from 'axios';

describe('GET /api/v1/health', () => {
  it('should return the message "Healthy!"', async () => {
    const res = await axios.get('/api/v1/health');
    expect(res.status).toBe(200);
    expect(res.data).toEqual('Healthy!');
  });
});
