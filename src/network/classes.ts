interface RequestFetchMyClassesArgs {
  q: string;
  rps: number;
  pageToken?: string;
  options?: {
    signal?: AbortSignal;
  };
}

interface RequestFetchMyClassesResponse {
  kind: string;
  etag: string;
  nextPageToken: string;
  prevPageToken: string;
  regionCode: string;
  pageInfo: {
    totalResults: number;
    resultsPerPage: number;
  };
  items: Class[];
}

const requestFetchMyClassesResults = async ({
  q,
  rps,
  pageToken,
  options,
}: RequestFetchMyClassesArgs): Promise<{
  data: Class[];
  totalCount: number;
  nextPageToken: string | null;
  prevPageToken: string | null;
}> => {
	return {

	}
}

export { requestFetchMyClassesResults }