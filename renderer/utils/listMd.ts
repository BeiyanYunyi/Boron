import fs from 'fs/promises';
import path from 'path';
import IMdMeta from '../../types/IMdMeta';
import getTimeStr from './getTimeStr';
import pathUtil from './pathUtil';
import { getData } from './renderMd';

export interface IMdInfo {
  name: string;
  info: IMdMeta;
}

const listMd: () => Promise<IMdInfo[]> = async () => {
  const mds = await fs.readdir(pathUtil.mdPath);
  const mdInfos = await Promise.all(
    mds.map(async (md) => {
      const mdPath = path.resolve(pathUtil.mdPath, md);
      const mdInfoPms = fs.stat(mdPath);
      const mdBufPms = fs.readFile(mdPath);
      const [mdInfo, mdBuf] = await Promise.all([mdInfoPms, mdBufPms]);
      const mdStr = mdBuf.toString();
      const docInfo = getData(mdStr);
      return {
        name: md.substring(0, md.length - 3),
        info: { ...docInfo, date: docInfo.date || mdInfo.mtime },
      };
    }),
  );
  mdInfos.sort((a, b) => b.info.date.getTime() - a.info.date.getTime());
  return mdInfos;
};

export default listMd;
