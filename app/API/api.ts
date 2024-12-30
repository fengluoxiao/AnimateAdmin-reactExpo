import { ADMIN_BASE_URL, BASE_URL } from '@env';

// 接口返回类型定义
export interface LoginResponse {
  ok: boolean;
  data?: {
    token: string;
  };
  message: string;
}

export interface NameData {
  id: number;
  name: string;
  desc: string;
}

export interface ApiResponse {
  ok: boolean;
  data: NameData[];
  message: string;
}

export interface RegisterResponse {
  ok: boolean;
  message: string;
}

export const api = {
  login: async (username: string, password: string): Promise<LoginResponse> => {
    const response = await fetch(`${ADMIN_BASE_URL}/api/admin/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password })
    });
    return response.json();
  },

  register: async (username: string, password: string, token: string): Promise<RegisterResponse> => {
    const response = await fetch(`${ADMIN_BASE_URL}/api/admin/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify({ username, password })
    });
    return response.json();
  },

  getAllNames: async (): Promise<ApiResponse> => {
    const response = await fetch(`${BASE_URL}/api/getallname`);
    return response.json();
  }
}; 