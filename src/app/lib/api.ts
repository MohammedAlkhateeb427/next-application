//Static Site Generation

export async function fetchGetSSG<T>(url: string): Promise<T> {
  try {
    const response = await fetch(url, {
      cache: 'force-cache', //This  is default in Next.js
    });
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();

    return data as T;
  } catch (error) {
    throw new Error(`Error fetching data: ${error}`);
  }
}

//Server-side Rendering
export async function fetchGetSSR<T>(url: string): Promise<T> {
  try {
    const response = await fetch(url, {
      cache: 'no-store',
    });
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();

    return data as T;
  } catch (error) {
    throw new Error(`Error fetching data: ${error}`);
  }
}
//Incremental Static Regeneration (
export async function fetchGetISR<T>(
  url: string,
  Revalidate: number
): Promise<T> {
  try {
    const response = await fetch(url, {
      next: {
        revalidate: 90,
      },
    });
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();

    return data as T;
  } catch (error) {
    throw new Error(`Error fetching data: ${error}`);
  }
}
//Create
export async function fetchPost<T>(url: string, data: any): Promise<T> {
  try {
    const response = await fetch(url, {
      method: 'POST',
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const responseData = await response.json();
    return responseData as T;
  } catch (error) {
    throw new Error(`Error posting data: ${error}`);
  }
}
//Update
export async function fetchPut<T>(url: string, data: any): Promise<T> {
  try {
    const response = await fetch(url, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const responseData = await response.json();
    return responseData as T;
  } catch (error) {
    throw new Error(`Error updating data: ${error}`);
  }
}
//Delete
export async function fetchDelete<T>(url: string): Promise<T> {
  try {
    const response = await fetch(url, {
      method: 'DELETE',
    });

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const responseData = await response.json();
    return responseData as T;
  } catch (error) {
    throw new Error(`Error deleting data: ${error}`);
  }
}
