import {Layout} from "antd";
import React from "react";
import type { IMasina } from "../mst/Provider.store";
import MasinaContent from "./Content"

const { Content } = Layout;
export interface MasinaProps{
    masini: IMasina[];
}

export const Overview = ({masini}:MasinaProps) => {
        return(
            <Layout>
              <Content style={{ padding: '0 50px' }}>
                <Layout className="site-layout-background" style={{ padding: '24px 0' }}>
                 <MasinaContent masini= {masini}/>
                </Layout>
              </Content>
            </Layout>
        )
}