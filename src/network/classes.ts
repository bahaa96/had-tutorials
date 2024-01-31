import { MyClass } from "../domain-models";
import instance from "./instance";

interface RequestFetchMyClassesArgs {
  rps: number;
	rpi: number;
  options?: {
    signal?: AbortSignal;
  };
}

const requestFetchMyClassesResults = async ({
  rpi,
  rps,
  options,
}: RequestFetchMyClassesArgs): Promise<{
  data: MyClass[];
  totalCount: number;
}> => {
	const { data: {  classes, totalCount } } = await instance.get('/api/classes', {
		params: {
			rpi,
			rps,
			signal: options?.signal,
		}
	})

	return { data: classes, totalCount  }
}

export { requestFetchMyClassesResults }