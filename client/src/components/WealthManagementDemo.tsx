import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { 
  FileText, 
  Search, 
  TrendingUp, 
  Upload,
  Eye,
  Download,
  BarChart3,
  Users,
  DollarSign,
  Calendar,
  Bot,
  Loader2,
  ExternalLink,
  X,
  BookOpen,
  ChevronDown,
  ChevronRight,
  History,
  Filter,
  Mail,
  Database,
  Link,
  Shield,
  Clock
} from "lucide-react";
import { useState } from "react";

export default function WealthManagementDemo() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedDocument, setSelectedDocument] = useState<string | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);
  type SourceType = 'email' | 'pdf' | 'database' | 'report' | 'api';
  
  const [queryResult, setQueryResult] = useState<{
    result: string; 
    data: string[];
    sources: Array<{
      type: SourceType;
      name: string;
      timestamp: string;
      confidence: number;
      icon: any;
    }>;
  } | null>(null);
  const [showIframe, setShowIframe] = useState(false);
  const [iframeUrl, setIframeUrl] = useState("");
  const [showPromptLibrary, setShowPromptLibrary] = useState(false);
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null);
  const [queryHistory, setQueryHistory] = useState<string[]>([]);

  const recentDocuments = [
    {
      id: "1",
      title: "Sequoia Capital Q4 2024 Report",
      type: "Manager Update",
      date: "2024-12-15",
      status: "processed",
      irr: "24.7%",
      aum: "$8.5B",
      keyInsights: ["Strong biotech portfolio performance", "3 successful exits", "ESG compliance rating: A+"]
    },
    {
      id: "2", 
      title: "Bain Capital Ventures Update",
      type: "Quarterly Report",
      date: "2024-12-10",
      status: "processing",
      irr: "18.3%",
      aum: "$3.2B",
      keyInsights: ["AI/ML investments up 40%", "2 IPO preparations", "New fund raising target: $4B"]
    },
    {
      id: "3",
      title: "General Atlantic Portfolio Review",
      type: "Annual Summary",
      date: "2024-12-08",
      status: "processed",
      irr: "16.9%",
      aum: "$12.1B",
      keyInsights: ["SaaS sector outperforming", "ESG integration complete", "Distribution: $1.2B"]
    }
  ];

  const promptLibrary = {
    "Performance Analysis": {
      icon: TrendingUp,
      color: "text-green-600",
      prompts: [
        "Show Harvard managers outperforming 15% IRR over the past 3 years",
        "Compare net IRR performance across private equity vintages 2019-2024",
        "Identify top quartile performers in our venture capital portfolio",
        "Analyze TVPI multiple progression for Fund VIII investments",
        "Which managers have consistently delivered alpha above benchmark?",
        "Show correlation between management fees and net performance",
        "Rank our real estate managers by risk-adjusted returns"
      ]
    },
    "Risk Management": {
      icon: Filter,
      color: "text-red-600", 
      prompts: [
        "Summarize private asset ESG risk commentary from last quarter",
        "Identify portfolio companies with elevated credit risk scores",
        "Show concentration risk across sectors and geographies",
        "Analyze liquidity timeline for our illiquid investments",
        "Which investments have missed their original exit timelines?",
        "Review counterparty risk exposure across prime brokers",
        "Summarize key person risk events in the past 12 months"
      ]
    },
    "Due Diligence": {
      icon: Search,
      color: "text-blue-600",
      prompts: [
        "Extract key terms from the latest Blackstone fund documentation",
        "Compare fee structures across similar vintage private equity funds",
        "Summarize investment committee concerns from recent proposals",
        "Analyze reference calls feedback for prospective managers",
        "Review operational due diligence findings for Fund XII",
        "What are the key differentiators in Apollo's new strategy?",
        "Compile background check results for new investment partners"
      ]
    },
    "Portfolio Construction": {
      icon: BarChart3,
      color: "text-purple-600",
      prompts: [
        "Which biotech investments have the highest return potential?",
        "Recommend optimal allocation across alternative asset classes",
        "Identify gaps in our emerging markets exposure",
        "Suggest rebalancing strategy for overweight technology positions",
        "Analyze portfolio diversification across investment styles",
        "Which sectors offer the best risk-return opportunity currently?",
        "Review our small-cap equity manager lineup effectiveness"
      ]
    },
    "Cash Flow Management": {
      icon: DollarSign,
      color: "text-emerald-600",
      prompts: [
        "List all managers with upcoming distribution schedules",
        "Project capital call requirements for the next 24 months",
        "Show net cash flow timing across our private investments",
        "Which funds are approaching their investment periods?",
        "Analyze distribution yield trends by asset class",
        "Calculate unfunded commitment exposure by vintage year",
        "Review liquidity requirements for upcoming board commitments"
      ]
    },
    "Compliance & Reporting": {
      icon: FileText,
      color: "text-orange-600",
      prompts: [
        "Generate quarterly board reporting package highlights",
        "Summarize regulatory compliance issues requiring attention",
        "Extract ILPA reporting requirements from partnership agreements",
        "Review transparency metrics across our manager relationships",
        "Compile environmental impact data for sustainability report",
        "What investments require updated tax documentation?",
        "Summarize fiduciary compliance status across all mandates"
      ]
    }
  };

  const queryExamples = [
    "Show Harvard managers outperforming 15% IRR over the past 3 years",
    "Summarize private asset ESG risk commentary from last quarter", 
    "Which biotech investments have the highest return potential?",
    "List all managers with upcoming distribution schedules"
  ];

  const portfolioMetrics = [
    { label: "Total AUM", value: "$53.2B", change: "+8.2%" },
    { label: "YTD Returns", value: "18.4%", change: "+2.1%" },
    { label: "Active Managers", value: "47", change: "+3" },
    { label: "Documents Processed", value: "1,248", change: "+12%" }
  ];

  const handleQuerySubmit = async () => {
    if (!searchQuery.trim()) return;
    
    setIsProcessing(true);
    setQueryResult(null);
    
    // Add to query history if not already present
    if (!queryHistory.includes(searchQuery)) {
      setQueryHistory(prev => [searchQuery, ...prev.slice(0, 9)]); // Keep last 10 queries
    }
    
    // Create a more dynamic query handler that processes the actual input
    setTimeout(() => {
      let response = {
        result: "AI Analysis Complete - Processing your investment query...",
        data: [
          "• Analyzing 47 active investment managers",
          "• Processing 1,248 recent documents", 
          "• Cross-referencing performance data",
          "• Generating insights based on your criteria",
          "• Results compiled from Harvard's portfolio database"
        ],
        sources: [
          { type: 'database' as SourceType, name: 'Harvard Portfolio Database', timestamp: '2024-12-15 14:30', confidence: 95, icon: Database },
          { type: 'report' as SourceType, name: 'Q4 Portfolio Summary', timestamp: '2024-12-10 09:15', confidence: 92, icon: FileText }
        ]
      };

      // Enhanced query matching for more dynamic responses
      const query = searchQuery.toLowerCase();
      
      if (query.includes("irr") || query.includes("performance") || query.includes("outperform")) {
        response = {
          result: "Found 8 managers exceeding 15% IRR threshold:",
          data: [
            "• Sequoia Capital: 24.7% IRR (3-year avg)",
            "• Bain Capital Ventures: 18.3% IRR (3-year avg)", 
            "• General Atlantic: 16.9% IRR (3-year avg)",
            "• TPG Capital: 15.2% IRR (3-year avg)",
            "• Additional 4 managers with IRR between 15.1-17.8%"
          ],
          sources: [
            { type: 'pdf' as SourceType, name: 'Sequoia_Q4_2024_Report.pdf', timestamp: '2024-12-15 10:30', confidence: 98, icon: FileText },
            { type: 'email' as SourceType, name: 'Michael Chen <mchen@baincapital.com>', timestamp: '2024-12-12 16:45', confidence: 94, icon: Mail },
            { type: 'pdf' as SourceType, name: 'General_Atlantic_Performance_Review.pdf', timestamp: '2024-12-08 14:20', confidence: 96, icon: FileText },
            { type: 'database' as SourceType, name: 'Harvard Performance Analytics DB', timestamp: '2024-12-15 08:00', confidence: 99, icon: Database }
          ]
        };
      } else if (query.includes("esg") || query.includes("risk") || query.includes("compliance")) {
        response = {
          result: "ESG Risk Analysis Summary (Q4 2024):",
          data: [
            "• 94% of portfolio companies maintain ESG compliance ratings above B+",
            "• 3 companies flagged for carbon footprint review",
            "• 12 new sustainable investment initiatives launched",
            "• Enhanced due diligence on 5 emerging market investments",
            "• Overall ESG portfolio score: 4.2/5.0"
          ],
          sources: [
            { type: 'report' as SourceType, name: 'ESG_Compliance_Q4_2024.pdf', timestamp: '2024-12-14 11:15', confidence: 97, icon: FileText },
            { type: 'email' as SourceType, name: 'Sarah Williams <swilliams@sustainalytics.com>', timestamp: '2024-12-13 09:30', confidence: 93, icon: Mail },
            { type: 'api' as SourceType, name: 'MSCI ESG Research API', timestamp: '2024-12-15 07:45', confidence: 96, icon: Link },
            { type: 'pdf' as SourceType, name: 'Carbon_Footprint_Assessment_2024.pdf', timestamp: '2024-12-11 13:20', confidence: 91, icon: FileText }
          ]
        };
      } else if (query.includes("biotech") || query.includes("pharma") || query.includes("drug")) {
        response = {
          result: "Top Biotech Investment Opportunities:",
          data: [
            "• Moderna Inc.: AI-driven vaccine development (Projected 28% IRR)",
            "• Ginkgo Bioworks: Synthetic biology platform (Projected 22% IRR)",
            "• 10x Genomics: Single-cell analysis tools (Projected 19% IRR)",
            "• Recursion Pharmaceuticals: AI drug discovery (Projected 25% IRR)",
            "• Portfolio allocation recommendation: 15-20% increase in biotech exposure"
          ],
          sources: [
            { type: 'email' as SourceType, name: 'Dr. James Liu <jliu@modernatx.com>', timestamp: '2024-12-14 15:22', confidence: 89, icon: Mail },
            { type: 'pdf' as SourceType, name: 'Biotech_Sector_Analysis_2024.pdf', timestamp: '2024-12-12 10:40', confidence: 95, icon: FileText },
            { type: 'api' as SourceType, name: 'PitchBook Private Market Data', timestamp: '2024-12-15 06:30', confidence: 92, icon: Link },
            { type: 'report' as SourceType, name: 'Healthcare Innovation Pipeline Report', timestamp: '2024-12-09 16:10', confidence: 94, icon: FileText }
          ]
        };
      } else if (query.includes("distribution") || query.includes("payout") || query.includes("return")) {
        response = {
          result: "Upcoming Distributions (Next 90 days):",
          data: [
            "• Sequoia Capital Fund XIV: $125M distribution (Feb 15)",
            "• Bain Capital Ventures IV: $89M distribution (Feb 28)",
            "• General Atlantic X: $203M distribution (Mar 10)",
            "• TPG Growth III: $156M distribution (Mar 22)",
            "• Total expected distributions: $573M"
          ],
          sources: [
            { type: 'email' as SourceType, name: 'David Park <dpark@sequoiacap.com>', timestamp: '2024-12-14 12:15', confidence: 98, icon: Mail },
            { type: 'pdf' as SourceType, name: 'Distribution_Schedule_Q1_2025.pdf', timestamp: '2024-12-13 09:45', confidence: 96, icon: FileText },
            { type: 'database' as SourceType, name: 'Capital Calls & Distributions DB', timestamp: '2024-12-15 08:15', confidence: 99, icon: Database },
            { type: 'email' as SourceType, name: 'Lisa Zhang <lzhang@tpg.com>', timestamp: '2024-12-12 14:30', confidence: 94, icon: Mail }
          ]
        };
      }

      setQueryResult(response);
      setIsProcessing(false);
    }, 2500);
  };

  const handleViewFullReport = (documentId: string) => {
    // Use iframe-friendly URLs that don't have authentication restrictions
    const reportUrls = {
      "1": "https://www.example.com/sample-report", // Sample report URL
      "2": "https://www.example.com/manager-update", // Manager update URL  
      "3": "https://www.example.com/portfolio-review" // Portfolio review URL
    };
    
    // For demo purposes, create a simple HTML report
    const reportContent = generateSampleReport(documentId);
    const blob = new Blob([reportContent], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    
    setIframeUrl(url);
    setShowIframe(true);
  };

  const generateSampleReport = (documentId: string) => {
    const doc = recentDocuments.find(d => d.id === documentId);
    if (!doc) return '';

    const reportTemplates = {
      "1": {
        title: "Q4 2024 Portfolio Performance Analysis",
        subtitle: "Comprehensive Investment Review & Strategic Outlook",
        metrics: [
          { label: "Total AUM", value: "$2.4B", change: "+12.3% YoY" },
          { label: "Net IRR", value: "+18.7%", change: "vs 14.2% benchmark" },
          { label: "Risk-Adjusted Return", value: "1.84", change: "Sharpe Ratio" },
          { label: "ESG Score", value: "4.7/5.0", change: "Top 5% globally" }
        ],
        sections: [
          {
            title: "Executive Summary",
            content: `
              <p><strong>Performance Highlights:</strong> The portfolio delivered exceptional returns of 18.7% net IRR, significantly outperforming our benchmark by 450 basis points. This performance was driven by strategic allocations to growth equity funds and technology-focused private equity investments.</p>
              
              <p><strong>Risk Management:</strong> Despite increased market volatility in Q4, portfolio risk metrics remained within target parameters. The Sharpe ratio of 1.84 places our performance in the top quartile of institutional portfolios.</p>
              
              <p><strong>ESG Leadership:</strong> Our commitment to sustainable investing continues to drive long-term value creation, with an ESG score of 4.7/5.0 ranking in the top 5% globally among institutional investors.</p>
            `
          },
          {
            title: "Asset Allocation & Performance Analysis",
            content: `
              <h4>Strategic Asset Allocation (as of December 31, 2024):</h4>
              <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 20px; margin: 20px 0;">
                <div style="background: #f0f9ff; padding: 20px; border-radius: 8px; border-left: 4px solid #3b82f6;">
                  <h5 style="margin: 0 0 10px 0; color: #1e40af;">Private Equity (45% - $1.08B)</h5>
                  <div style="color: #059669; font-weight: bold; font-size: 18px;">+21.4% Net IRR</div>
                  <div style="font-size: 14px; color: #6b7280;">Target allocation: 40-50%</div>
                </div>
                <div style="background: #f0fdf4; padding: 20px; border-radius: 8px; border-left: 4px solid #10b981;">
                  <h5 style="margin: 0 0 10px 0; color: #059669;">Growth Equity (25% - $600M)</h5>
                  <div style="color: #059669; font-weight: bold; font-size: 18px;">+16.8% Net IRR</div>
                  <div style="font-size: 14px; color: #6b7280;">Target allocation: 20-30%</div>
                </div>
                <div style="background: #fef7ff; padding: 20px; border-radius: 8px; border-left: 4px solid #a855f7;">
                  <h5 style="margin: 0 0 10px 0; color: #7c3aed;">Venture Capital (20% - $480M)</h5>
                  <div style="color: #059669; font-weight: bold; font-size: 18px;">+28.3% Net IRR</div>
                  <div style="font-size: 14px; color: #6b7280;">Target allocation: 15-25%</div>
                </div>
                <div style="background: #fffbeb; padding: 20px; border-radius: 8px; border-left: 4px solid #f59e0b;">
                  <h5 style="margin: 0 0 10px 0; color: #d97706;">Real Assets (10% - $240M)</h5>
                  <div style="color: #059669; font-weight: bold; font-size: 18px;">+12.1% Net IRR</div>
                  <div style="font-size: 14px; color: #6b7280;">Target allocation: 10-15%</div>
                </div>
              </div>
              
              <h4>Top 10 Holdings by Performance (YTD 2024):</h4>
              <table style="width: 100%; border-collapse: collapse; margin: 20px 0; background: white;">
                <thead>
                  <tr style="background: #f8fafc;">
                    <th style="padding: 15px; text-align: left; border-bottom: 2px solid #e2e8f0;">Manager/Fund</th>
                    <th style="padding: 15px; text-align: left; border-bottom: 2px solid #e2e8f0;">Strategy</th>
                    <th style="padding: 15px; text-align: right; border-bottom: 2px solid #e2e8f0;">Net IRR</th>
                    <th style="padding: 15px; text-align: right; border-bottom: 2px solid #e2e8f0;">TVPI Multiple</th>
                    <th style="padding: 15px; text-align: right; border-bottom: 2px solid #e2e8f0;">Commitment</th>
                  </tr>
                </thead>
                <tbody>
                  <tr style="border-bottom: 1px solid #f1f5f9;">
                    <td style="padding: 12px; font-weight: 600;">Sequoia Capital XIII</td>
                    <td style="padding: 12px;">Growth/VC</td>
                    <td style="padding: 12px; text-align: right; color: #059669; font-weight: bold;">24.3%</td>
                    <td style="padding: 12px; text-align: right;">2.8x</td>
                    <td style="padding: 12px; text-align: right;">$125M</td>
                  </tr>
                  <tr style="border-bottom: 1px solid #f1f5f9;">
                    <td style="padding: 12px; font-weight: 600;">Bain Capital Tech XII</td>
                    <td style="padding: 12px;">Tech Buyout</td>
                    <td style="padding: 12px; text-align: right; color: #059669; font-weight: bold;">22.1%</td>
                    <td style="padding: 12px; text-align: right;">2.6x</td>
                    <td style="padding: 12px; text-align: right;">$100M</td>
                  </tr>
                  <tr style="border-bottom: 1px solid #f1f5f9;">
                    <td style="padding: 12px; font-weight: 600;">General Atlantic X</td>
                    <td style="padding: 12px;">Growth Equity</td>
                    <td style="padding: 12px; text-align: right; color: #059669; font-weight: bold;">19.8%</td>
                    <td style="padding: 12px; text-align: right;">2.4x</td>
                    <td style="padding: 12px; text-align: right;">$150M</td>
                  </tr>
                  <tr style="border-bottom: 1px solid #f1f5f9;">
                    <td style="padding: 12px; font-weight: 600;">TPG Growth III</td>
                    <td style="padding: 12px;">Mid-Market PE</td>
                    <td style="padding: 12px; text-align: right; color: #059669; font-weight: bold;">17.2%</td>
                    <td style="padding: 12px; text-align: right;">2.1x</td>
                    <td style="padding: 12px; text-align: right;">$125M</td>
                  </tr>
                  <tr>
                    <td style="padding: 12px; font-weight: 600;">Kleiner Perkins XX</td>
                    <td style="padding: 12px;">AI/ML VC</td>
                    <td style="padding: 12px; text-align: right; color: #059669; font-weight: bold;">31.7%</td>
                    <td style="padding: 12px; text-align: right;">3.2x</td>
                    <td style="padding: 12px; text-align: right;">$75M</td>
                  </tr>
                </tbody>
              </table>
            `
          },
          {
            title: "Risk Management & Analytics",
            content: `
              <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 30px; margin: 25px 0;">
                <div style="background: #f8fafc; padding: 25px; border-radius: 10px;">
                  <h4 style="margin: 0 0 20px 0; color: #374151;">Portfolio Risk Metrics</h4>
                  <table style="width: 100%; border-collapse: collapse;">
                    <tr style="border-bottom: 1px solid #e5e7eb;">
                      <td style="padding: 10px 0; font-weight: 500;">Portfolio Beta</td>
                      <td style="text-align: right; padding: 10px 0; font-weight: 600;">0.92</td>
                    </tr>
                    <tr style="border-bottom: 1px solid #e5e7eb;">
                      <td style="padding: 10px 0; font-weight: 500;">Value at Risk (95%)</td>
                      <td style="text-align: right; padding: 10px 0; font-weight: 600;">-3.2%</td>
                    </tr>
                    <tr style="border-bottom: 1px solid #e5e7eb;">
                      <td style="padding: 10px 0; font-weight: 500;">Maximum Drawdown</td>
                      <td style="text-align: right; padding: 10px 0; font-weight: 600;">-8.1%</td>
                    </tr>
                    <tr style="border-bottom: 1px solid #e5e7eb;">
                      <td style="padding: 10px 0; font-weight: 500;">Tracking Error</td>
                      <td style="text-align: right; padding: 10px 0; font-weight: 600;">4.2%</td>
                    </tr>
                    <tr>
                      <td style="padding: 10px 0; font-weight: 500;">Information Ratio</td>
                      <td style="text-align: right; padding: 10px 0; font-weight: 600;">1.07</td>
                    </tr>
                  </table>
                </div>
                
                <div style="background: #fef7ff; padding: 25px; border-radius: 10px;">
                  <h4 style="margin: 0 0 20px 0; color: #374151;">Concentration Analysis</h4>
                  <div style="margin: 15px 0;">
                    <div style="display: flex; justify-content: space-between; padding: 8px 0; border-bottom: 1px solid #e5e7eb;">
                      <span style="font-weight: 500;">Top 5 Positions</span>
                      <span style="font-weight: 600;">32.4%</span>
                    </div>
                    <div style="display: flex; justify-content: space-between; padding: 8px 0; border-bottom: 1px solid #e5e7eb;">
                      <span style="font-weight: 500;">Top 10 Positions</span>
                      <span style="font-weight: 600;">54.7%</span>
                    </div>
                    <div style="display: flex; justify-content: space-between; padding: 8px 0; border-bottom: 1px solid #e5e7eb;">
                      <span style="font-weight: 500;">Single Manager Max</span>
                      <span style="font-weight: 600;">8.3%</span>
                    </div>
                    <div style="display: flex; justify-content: space-between; padding: 8px 0; border-bottom: 1px solid #e5e7eb;">
                      <span style="font-weight: 500;">Technology Exposure</span>
                      <span style="font-weight: 600;">28.4%</span>
                    </div>
                    <div style="display: flex; justify-content: space-between; padding: 8px 0;">
                      <span style="font-weight: 500;">Geographic Diversification</span>
                      <span style="font-weight: 600;">6 regions</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <h4>Stress Testing Results:</h4>
              <table style="width: 100%; border-collapse: collapse; margin: 20px 0; background: white;">
                <thead>
                  <tr style="background: #f8fafc;">
                    <th style="padding: 15px; text-align: left; border-bottom: 2px solid #e2e8f0;">Scenario</th>
                    <th style="padding: 15px; text-align: right; border-bottom: 2px solid #e2e8f0;">Probability</th>
                    <th style="padding: 15px; text-align: right; border-bottom: 2px solid #e2e8f0;">Portfolio Impact</th>
                    <th style="padding: 15px; text-align: right; border-bottom: 2px solid #e2e8f0;">Recovery Period</th>
                  </tr>
                </thead>
                <tbody>
                  <tr style="border-bottom: 1px solid #f1f5f9;">
                    <td style="padding: 12px; font-weight: 600;">Base Case</td>
                    <td style="padding: 12px; text-align: right;">60%</td>
                    <td style="padding: 12px; text-align: right; color: #059669; font-weight: bold;">+12-16%</td>
                    <td style="padding: 12px; text-align: right;">N/A</td>
                  </tr>
                  <tr style="border-bottom: 1px solid #f1f5f9;">
                    <td style="padding: 12px; font-weight: 600;">Market Correction</td>
                    <td style="padding: 12px; text-align: right;">25%</td>
                    <td style="padding: 12px; text-align: right; color: #d97706; font-weight: bold;">-5-8%</td>
                    <td style="padding: 12px; text-align: right;">8-12 months</td>
                  </tr>
                  <tr style="border-bottom: 1px solid #f1f5f9;">
                    <td style="padding: 12px; font-weight: 600;">Economic Recession</td>
                    <td style="padding: 12px; text-align: right;">12%</td>
                    <td style="padding: 12px; text-align: right; color: #dc2626; font-weight: bold;">-12-18%</td>
                    <td style="padding: 12px; text-align: right;">18-24 months</td>
                  </tr>
                  <tr>
                    <td style="padding: 12px; font-weight: 600;">Severe Crisis</td>
                    <td style="padding: 12px; text-align: right;">3%</td>
                    <td style="padding: 12px; text-align: right; color: #dc2626; font-weight: bold;">-25-35%</td>
                    <td style="padding: 12px; text-align: right;">36+ months</td>
                  </tr>
                </tbody>
              </table>
            `
          },
          {
            title: "ESG & Sustainability Metrics",
            content: `
              <div style="background: #f0fdf4; padding: 25px; border-radius: 10px; margin: 20px 0; border-left: 4px solid #10b981;">
                <h4 style="margin: 0 0 20px 0; color: #059669;">ESG Performance Highlights</h4>
                <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px;">
                  <div style="text-align: center;">
                    <div style="font-size: 28px; font-weight: bold; color: #059669;">4.7/5.0</div>
                    <div style="font-weight: 600; margin: 5px 0;">Overall ESG Score</div>
                    <div style="font-size: 14px; color: #6b7280;">Top 5% globally</div>
                  </div>
                  <div style="text-align: center;">
                    <div style="font-size: 28px; font-weight: bold; color: #059669;">-23%</div>
                    <div style="font-weight: 600; margin: 5px 0;">Carbon Reduction</div>
                    <div style="font-size: 14px; color: #6b7280;">vs 2020 baseline</div>
                  </div>
                  <div style="text-align: center;">
                    <div style="font-size: 28px; font-weight: bold; color: #059669;">18%</div>
                    <div style="font-weight: 600; margin: 5px 0;">Impact Investments</div>
                    <div style="font-size: 14px; color: #6b7280;">of total portfolio</div>
                  </div>
                </div>
              </div>
              
              <h4>Sustainable Investment Initiatives:</h4>
              <ul style="background: #fafafa; padding: 20px 25px; border-radius: 8px; margin: 15px 0;">
                <li style="margin: 10px 0;"><strong>Clean Technology:</strong> $432M allocated to renewable energy and clean tech companies (18% of portfolio)</li>
                <li style="margin: 10px 0;"><strong>Healthcare Innovation:</strong> $285M in biotech and digital health solutions addressing global health challenges</li>
                <li style="margin: 10px 0;"><strong>Financial Inclusion:</strong> $156M in fintech companies expanding access to financial services in emerging markets</li>
                <li style="margin: 10px 0;"><strong>Education Technology:</strong> $94M in edtech platforms democratizing access to quality education</li>
              </ul>
            `
          },
          {
            title: "Strategic Outlook & Recommendations",
            content: `
              <h4>2025 Strategic Priorities:</h4>
              <div style="background: #f8fafc; padding: 25px; border-radius: 10px; margin: 20px 0;">
                <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 25px;">
                  <div>
                    <h5 style="color: #1e40af; margin: 0 0 15px 0;">Growth Initiatives</h5>
                    <ul style="margin: 0; padding-left: 20px;">
                      <li style="margin: 8px 0;">Increase AI/ML allocation to 12% of portfolio</li>
                      <li style="margin: 8px 0;">Expand emerging markets exposure to 15%</li>
                      <li style="margin: 8px 0;">Target 3-4 new manager relationships</li>
                      <li style="margin: 8px 0;">Launch co-investment program</li>
                    </ul>
                  </div>
                  <div>
                    <h5 style="color: #059669; margin: 0 0 15px 0;">Risk Management</h5>
                    <ul style="margin: 0; padding-left: 20px;">
                      <li style="margin: 8px 0;">Implement enhanced ESG screening</li>
                      <li style="margin: 8px 0;">Increase liquid alternatives to 15%</li>
                      <li style="margin: 8px 0;">Deploy tactical hedging strategies</li>
                      <li style="margin: 8px 0;">Strengthen operational due diligence</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <h4>Market Outlook & Positioning:</h4>
              <div style="background: #fffbeb; padding: 20px; border-radius: 8px; margin: 15px 0; border-left: 4px solid #f59e0b;">
                <p style="margin: 0;"><strong>Economic Environment:</strong> We anticipate continued volatility in 2025 driven by geopolitical tensions and monetary policy transitions. Our portfolio is positioned defensively with strong balance sheets and recession-resilient business models.</p>
              </div>
              
              <div style="background: #f0f9ff; padding: 20px; border-radius: 8px; margin: 15px 0; border-left: 4px solid #3b82f6;">
                <p style="margin: 0;"><strong>Technology Trends:</strong> AI adoption acceleration presents significant opportunities. We're increasing exposure to enterprise AI, automation, and data infrastructure companies while maintaining discipline on valuations.</p>
              </div>
              
              <div style="background: #f0fdf4; padding: 20px; border-radius: 8px; margin: 15px 0; border-left: 4px solid #10b981;">
                <p style="margin: 0;"><strong>Sustainability Focus:</strong> ESG integration remains a key differentiator. Companies with strong sustainability profiles continue to outperform, driving our commitment to impact investing and carbon neutrality by 2030.</p>
              </div>
            `
          }
        ]
      },
      "2": {
        title: "Manager Due Diligence Report - Q4 2024",
        subtitle: "Comprehensive Review of Investment Manager Performance",
        metrics: [
          { label: "Managers Evaluated", value: "23", change: "100% portfolio coverage" },
          { label: "Average Performance", value: "+16.2%", change: "vs 12.1% target" },
          { label: "ESG Compliance", value: "96%", change: "+4% improvement" },
          { label: "New Commitments", value: "$185M", change: "3 new managers" }
        ],
        sections: [
          {
            title: "Manager Performance Overview",
            content: `
              <p>This comprehensive quarterly review evaluates all 23 active investment managers across our private markets portfolio, analyzing quantitative performance metrics, operational capabilities, and ESG compliance standards.</p>
              
              <h4>Performance Distribution Analysis:</h4>
              <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; margin: 25px 0;">
                <div style="background: #d1fae5; padding: 25px; border-radius: 10px; text-align: center; border: 2px solid #a7f3d0;">
                  <div style="font-size: 36px; font-weight: bold; color: #059669; margin-bottom: 10px;">12</div>
                  <div style="font-weight: 600; font-size: 18px; margin-bottom: 5px;">Outperforming</div>
                  <div style="font-size: 14px; color: #6b7280;">Exceeding benchmark by >200bps</div>
                  <div style="font-size: 12px; color: #059669; margin-top: 8px;">52% of portfolio</div>
                </div>
                <div style="background: #fef3c7; padding: 25px; border-radius: 10px; text-align: center; border: 2px solid #fde68a;">
                  <div style="font-size: 36px; font-weight: bold; color: #d97706; margin-bottom: 10px;">8</div>
                  <div style="font-weight: 600; font-size: 18px; margin-bottom: 5px;">On Target</div>
                  <div style="font-size: 14px; color: #6b7280;">Within ±200bps of benchmark</div>
                  <div style="font-size: 12px; color: #d97706; margin-top: 8px;">35% of portfolio</div>
                </div>
                <div style="background: #fee2e2; padding: 25px; border-radius: 10px; text-align: center; border: 2px solid #fecaca;">
                  <div style="font-size: 36px; font-weight: bold; color: #dc2626; margin-bottom: 10px;">3</div>
                  <div style="font-weight: 600; font-size: 18px; margin-bottom: 5px;">Under Review</div>
                  <div style="font-size: 14px; color: #6b7280;">Below benchmark by >200bps</div>
                  <div style="font-size: 12px; color: #dc2626; margin-top: 8px;">13% of portfolio</div>
                </div>
              </div>
            `
          }
        ]
      },
      "3": {
        title: "Risk Assessment & Stress Testing Analysis",
        subtitle: "Portfolio Resilience & Scenario Planning Report",
        metrics: [
          { label: "Portfolio VaR (95%)", value: "-3.2%", change: "Within tolerance" },
          { label: "Stress Test Loss", value: "-12.8%", change: "Severe recession scenario" },
          { label: "Liquidity Score", value: "8.1/10", change: "Strong liquidity position" },
          { label: "Correlation Risk", value: "0.64", change: "Moderate correlation to S&P 500" }
        ],
        sections: [
          {
            title: "Comprehensive Risk Analysis",
            content: `
              <p>Our risk management framework employs sophisticated quantitative models and stress testing methodologies to assess portfolio resilience across various market scenarios and economic conditions.</p>
            `
          }
        ]
      }
    };

    const template = reportTemplates[documentId as keyof typeof reportTemplates];
    if (!template) return '';

    return `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <title>${template.title}</title>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <style>
          * { 
            box-sizing: border-box; 
            margin: 0; 
            padding: 0; 
          }
          body { 
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; 
            line-height: 1.7; 
            background: #f8fafc;
            color: #1e293b;
            padding: 20px;
          }
          .container { 
            max-width: 1200px; 
            margin: 0 auto; 
            background: white;
            border-radius: 12px;
            overflow: hidden;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
          }
          .header { 
            background: linear-gradient(135deg, #1e40af 0%, #3b82f6 100%); 
            color: white; 
            padding: 50px 40px 40px; 
            position: relative;
            overflow: hidden;
          }
          .header::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse"><path d="M 10 0 L 0 0 0 10" fill="none" stroke="rgba(255,255,255,0.1)" stroke-width="0.5"/></pattern></defs><rect width="100" height="100" fill="url(%23grid)"/></svg>');
            opacity: 0.3;
          }
          .header-content {
            position: relative;
            z-index: 1;
          }
          .header h1 { 
            font-size: 2.75rem; 
            font-weight: 800; 
            margin-bottom: 10px;
            letter-spacing: -0.025em;
          }
          .header p { 
            font-size: 1.2rem; 
            opacity: 0.9; 
            font-weight: 400;
          }
          .content {
            padding: 40px;
          }
          .metrics { 
            display: grid; 
            grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); 
            gap: 25px; 
            margin: 0 0 40px 0; 
          }
          .metric-card { 
            background: linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%);
            padding: 30px; 
            border-radius: 12px; 
            border: 1px solid #e2e8f0;
            transition: all 0.3s ease;
            position: relative;
            overflow: hidden;
          }
          .metric-card::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 4px;
            height: 100%;
            background: linear-gradient(to bottom, #3b82f6, #1e40af);
          }
          .metric-card:hover {
            transform: translateY(-3px);
            box-shadow: 0 15px 35px rgba(0, 0, 0, 0.1);
          }
          .metric-label { 
            font-size: 0.9rem; 
            color: #64748b; 
            margin-bottom: 12px; 
            font-weight: 600;
            text-transform: uppercase;
            letter-spacing: 0.05em;
          }
          .metric-value { 
            font-size: 2.5rem; 
            font-weight: 800; 
            color: #059669; 
            margin-bottom: 8px;
            line-height: 1;
          }
          .metric-change { 
            font-size: 0.9rem; 
            color: #6b7280; 
            font-weight: 500;
          }
          .section { 
            margin-bottom: 40px; 
            padding: 35px;
            background: white;
            border-radius: 12px;
            border: 1px solid #e2e8f0;
            box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
          }
          .section h2 { 
            font-size: 1.75rem; 
            font-weight: 700; 
            color: #1e293b;
            margin-bottom: 25px;
            padding-bottom: 15px;
            border-bottom: 3px solid #e2e8f0;
            position: relative;
          }
          .section h2::after {
            content: '';
            position: absolute;
            bottom: -3px;
            left: 0;
            width: 60px;
            height: 3px;
            background: linear-gradient(to right, #3b82f6, #1e40af);
          }
          .section h3 { 
            font-size: 1.4rem; 
            font-weight: 600; 
            color: #374151;
            margin: 30px 0 20px 0;
          }
          .section h4 { 
            font-size: 1.2rem; 
            font-weight: 600; 
            color: #4b5563;
            margin: 25px 0 15px 0;
          }
          .section h5 { 
            font-size: 1.1rem; 
            font-weight: 600; 
            color: #6b7280;
            margin: 20px 0 10px 0;
          }
          .section p {
            margin-bottom: 16px;
            font-size: 1rem;
            line-height: 1.7;
          }
          .footer {
            background: #f1f5f9;
            padding: 30px 40px;
            text-align: center;
            color: #64748b;
            border-top: 1px solid #e2e8f0;
          }
          .footer p {
            margin: 8px 0;
          }
          table { 
            width: 100%; 
            border-collapse: separate; 
            border-spacing: 0; 
            border-radius: 8px;
            overflow: hidden;
            box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
          }
          th { 
            background: #f8fafc; 
            font-weight: 600; 
            color: #374151;
            padding: 18px 16px;
            text-align: left;
            font-size: 0.9rem;
            text-transform: uppercase;
            letter-spacing: 0.05em;
          }
          td { 
            padding: 16px; 
            border-bottom: 1px solid #f1f5f9; 
            background: white;
          }
          tr:hover td { 
            background: #f8fafc; 
          }
          tr:last-child td {
            border-bottom: none;
          }
          ul, ol { 
            padding-left: 24px; 
            margin: 16px 0;
          }
          li { 
            margin: 12px 0; 
            line-height: 1.6;
          }
          strong {
            font-weight: 600;
            color: #1e293b;
          }
          .print-break { 
            page-break-before: always; 
          }
          @media print {
            body { 
              background: white; 
              padding: 0;
            }
            .container {
              box-shadow: none;
            }
            .header { 
              background: #1e40af !important; 
            }
            .section { 
              box-shadow: none; 
              break-inside: avoid;
            }
            .metric-card {
              break-inside: avoid;
            }
          }
          @media (max-width: 768px) {
            .content, .footer {
              padding: 20px;
            }
            .header {
              padding: 30px 20px;
            }
            .header h1 {
              font-size: 2rem;
            }
            .section {
              padding: 25px;
            }
            .metrics {
              grid-template-columns: 1fr;
            }
            table {
              font-size: 0.9rem;
            }
            th, td {
              padding: 12px 8px;
            }
          }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <div class="header-content">
              <h1>${template.title}</h1>
              <p>${template.subtitle} • Generated ${new Date().toLocaleDateString('en-US', { 
                weekday: 'long', 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}</p>
            </div>
          </div>
          
          <div class="content">
            <div class="metrics">
              ${template.metrics.map(metric => `
                <div class="metric-card">
                  <div class="metric-label">${metric.label}</div>
                  <div class="metric-value">${metric.value}</div>
                  <div class="metric-change">${metric.change}</div>
                </div>
              `).join('')}
            </div>
            
            ${template.sections.map((section, index) => `
              <div class="section ${index > 0 ? 'print-break' : ''}">
                <h2>${section.title}</h2>
                ${section.content}
              </div>
            `).join('')}
          </div>
          
          <div class="footer">
            <p><strong>Confidential Investment Report</strong></p>
            <p>This document contains proprietary and confidential information. Distribution is restricted to authorized recipients only.</p>
            <p>Report generated by Wealth Manager Platform • ${new Date().toLocaleDateString()}</p>
          </div>
        </div>
      </body>
      </html>
    `;
  };

  return (
    <div className="space-y-6">
      {/* Header Section */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-foreground">Wealth Manager</h2>
          <p className="text-muted-foreground">Intelligent portfolio management and document processing</p>
        </div>
        <Button className="flex items-center gap-2">
          <Upload className="h-4 w-4" />
          Upload Documents
        </Button>
      </div>

      {/* Portfolio Overview Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {portfolioMetrics.map((metric, index) => (
          <Card key={index} className="bg-white border-border">
            <CardContent className="p-4">
              <div className="text-sm text-muted-foreground">{metric.label}</div>
              <div className="text-2xl font-bold text-foreground">{metric.value}</div>
              <div className="text-sm text-green-600">{metric.change}</div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Interactive Query Interface */}
      <Card className="bg-white border-border">
        <div className="px-6 py-4 border-b border-border">
          <h3 className="text-lg font-semibold text-foreground flex items-center gap-2">
            <Search className="h-5 w-5" />
            Natural Language Query Interface
          </h3>
          <p className="text-sm text-muted-foreground mt-1">
            Ask questions about your portfolio using natural language
          </p>
        </div>
        <CardContent className="p-6">
          <div className="flex gap-2 mb-4">
            <Input
              placeholder="Ask about your portfolio performance, managers, or investments..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="flex-1"
              onKeyPress={(e) => e.key === 'Enter' && handleQuerySubmit()}
              disabled={isProcessing}
            />
            <Button 
              onClick={() => setShowPromptLibrary(!showPromptLibrary)}
              variant="outline"
              className="flex items-center gap-2"
            >
              <BookOpen className="h-4 w-4" />
              Library
            </Button>
            <Button onClick={handleQuerySubmit} disabled={isProcessing || !searchQuery.trim()}>
              {isProcessing ? (
                <Loader2 className="h-4 w-4 animate-spin" />
              ) : (
                <Search className="h-4 w-4" />
              )}
            </Button>
          </div>

          {/* Prompt Library Panel */}
          {showPromptLibrary && (
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 mb-4">
              <div className="flex items-center justify-between mb-4">
                <h4 className="font-semibold text-foreground flex items-center gap-2">
                  <BookOpen className="h-4 w-4" />
                  Wealth Management Prompt Library
                </h4>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setShowPromptLibrary(false)}
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>
              
              {/* Query History */}
              {queryHistory.length > 0 && (
                <div className="mb-4">
                  <h5 className="text-sm font-medium text-muted-foreground mb-2 flex items-center gap-1">
                    <History className="h-3 w-3" />
                    Recent Queries
                  </h5>
                  <div className="flex flex-wrap gap-1">
                    {queryHistory.slice(0, 5).map((query, index) => (
                      <Button
                        key={index}
                        variant="outline"
                        size="sm"
                        onClick={() => {
                          setSearchQuery(query);
                          setShowPromptLibrary(false);
                        }}
                        className="text-xs h-6 px-2 text-gray-600 hover:bg-blue-50"
                      >
                        {query.length > 40 ? query.substring(0, 40) + '...' : query}
                      </Button>
                    ))}
                  </div>
                </div>
              )}

              {/* Categorized Prompts */}
              <div className="space-y-3">
                {Object.entries(promptLibrary).map(([category, data]) => {
                  const Icon = data.icon;
                  const isExpanded = expandedCategory === category;
                  
                  return (
                    <div key={category} className="border border-gray-200 rounded-lg bg-white">
                      <button
                        onClick={() => setExpandedCategory(isExpanded ? null : category)}
                        className="w-full flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg"
                      >
                        <div className="flex items-center gap-2">
                          <Icon className={`h-4 w-4 ${data.color}`} />
                          <span className="font-medium text-sm">{category}</span>
                          <Badge variant="secondary" className="text-xs">
                            {data.prompts.length}
                          </Badge>
                        </div>
                        {isExpanded ? (
                          <ChevronDown className="h-4 w-4 text-gray-500" />
                        ) : (
                          <ChevronRight className="h-4 w-4 text-gray-500" />
                        )}
                      </button>
                      
                      {isExpanded && (
                        <div className="px-3 pb-3 space-y-1">
                          {data.prompts.map((prompt, index) => (
                            <button
                              key={index}
                              onClick={() => {
                                setSearchQuery(prompt);
                                setShowPromptLibrary(false);
                                setTimeout(() => handleQuerySubmit(), 100);
                              }}
                              className="w-full text-left p-2 text-xs text-gray-700 hover:bg-blue-50 rounded border-l-2 border-gray-200 hover:border-blue-400 transition-colors"
                            >
                              {prompt}
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          )}
          
          {/* AI Model Processing Status */}
          {isProcessing && (
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-4">
              <div className="flex items-center gap-3">
                <Bot className="h-5 w-5 text-blue-600" />
                <div className="flex-1">
                  <h4 className="font-medium text-blue-900">AI Model Processing</h4>
                  <div className="flex items-center gap-2 mt-1">
                    <Loader2 className="h-3 w-3 animate-spin text-blue-600" />
                    <span className="text-sm text-blue-700">Analyzing portfolio data and generating insights...</span>
                  </div>
                </div>
              </div>
              <div className="mt-3 space-y-1 text-xs text-blue-600">
                <div>• Accessing Harvard portfolio database</div>
                <div>• Processing manager performance data</div>
                <div>• Cross-referencing market analytics</div>
                <div>• Generating natural language response</div>
              </div>
            </div>
          )}
          
          {/* Query Results */}
          {queryResult && !isProcessing && (
            <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-4">
              <div className="flex items-start gap-3">
                <Bot className="h-5 w-5 text-green-600 mt-0.5" />
                <div className="flex-1">
                  <h4 className="font-medium text-green-900">{queryResult.result}</h4>
                  <div className="mt-2 space-y-1">
                    {queryResult.data.map((item, index) => (
                      <div key={index} className="text-sm text-green-800">{item}</div>
                    ))}
                  </div>
                  
                  {/* Source Information */}
                  <div className="mt-4 pt-3 border-t border-green-200">
                    <div className="flex items-center gap-2 mb-2">
                      <Shield className="h-4 w-4 text-green-700" />
                      <span className="text-sm font-medium text-green-700">Data Sources & Lineage</span>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {queryResult.sources.map((source, index) => {
                        const IconComponent = source.icon;
                        const getSourceColor = (type: string) => {
                          switch (type) {
                            case 'email': return 'text-blue-600 bg-blue-50 border-blue-200';
                            case 'pdf': return 'text-red-600 bg-red-50 border-red-200';
                            case 'database': return 'text-purple-600 bg-purple-50 border-purple-200';
                            case 'report': return 'text-orange-600 bg-orange-50 border-orange-200';
                            case 'api': return 'text-green-600 bg-green-50 border-green-200';
                            default: return 'text-gray-600 bg-gray-50 border-gray-200';
                          }
                        };
                        
                        return (
                          <div 
                            key={index} 
                            className={`p-2 rounded border text-xs ${getSourceColor(source.type)}`}
                          >
                            <div className="flex items-start gap-2">
                              <IconComponent className="h-3 w-3 mt-0.5 flex-shrink-0" />
                              <div className="flex-1 min-w-0">
                                <div className="font-medium truncate">{source.name}</div>
                                <div className="flex items-center gap-2 mt-1 text-xs opacity-75">
                                  <Clock className="h-2 w-2" />
                                  <span>{source.timestamp}</span>
                                  <span className="ml-auto">{source.confidence}% confidence</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
          
          <div className="space-y-2">
            <p className="text-sm font-medium text-foreground">Try these examples:</p>
            <div className="flex flex-wrap gap-2">
              {queryExamples.map((example, index) => (
                <Button
                  key={index}
                  variant="outline"
                  size="sm"
                  onClick={() => {
                    setSearchQuery(example);
                    setTimeout(() => {
                      setSearchQuery(example);
                      handleQuerySubmit();
                    }, 100);
                  }}
                  disabled={isProcessing}
                  className="text-xs h-auto py-2 px-3 whitespace-normal text-left hover:bg-blue-50"
                >
                  {example}
                </Button>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Document Processing Dashboard */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Documents */}
        <Card className="bg-white border-border">
          <div className="px-6 py-4 border-b border-border">
            <h3 className="text-lg font-semibold text-foreground flex items-center gap-2">
              <FileText className="h-5 w-5" />
              Recent Manager Documents
            </h3>
          </div>
          <CardContent className="p-6">
            <div className="space-y-4">
              {recentDocuments.map((doc) => (
                <div key={doc.id} className="border border-border rounded-lg p-4 hover:bg-gray-50 cursor-pointer"
                     onClick={() => setSelectedDocument(doc.id)}>
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h4 className="font-medium text-foreground">{doc.title}</h4>
                      <p className="text-sm text-muted-foreground">{doc.type} • {doc.date}</p>
                      <div className="flex items-center gap-4 mt-2">
                        <span className="text-sm">IRR: <span className="font-semibold text-green-600">{doc.irr}</span></span>
                        <span className="text-sm">AUM: <span className="font-semibold">{doc.aum}</span></span>
                      </div>
                    </div>
                    <Badge variant={doc.status === 'processed' ? 'default' : 'secondary'}>
                      {doc.status}
                    </Badge>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Document Insights */}
        <Card className="bg-white border-border">
          <div className="px-6 py-4 border-b border-border">
            <h3 className="text-lg font-semibold text-foreground flex items-center gap-2">
              <BarChart3 className="h-5 w-5" />
              Extracted Insights
            </h3>
          </div>
          <CardContent className="p-6">
            {selectedDocument ? (
              <div className="space-y-4">
                {(() => {
                  const doc = recentDocuments.find(d => d.id === selectedDocument);
                  return doc ? (
                    <>
                      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                        <h4 className="font-medium text-blue-900">{doc.title}</h4>
                        <div className="grid grid-cols-2 gap-4 mt-3">
                          <div>
                            <span className="text-sm text-blue-700">IRR Performance</span>
                            <div className="text-lg font-bold text-blue-900">{doc.irr}</div>
                          </div>
                          <div>
                            <span className="text-sm text-blue-700">Assets Under Management</span>
                            <div className="text-lg font-bold text-blue-900">{doc.aum}</div>
                          </div>
                        </div>
                      </div>
                      
                      <div>
                        <h5 className="font-medium text-foreground mb-2">Key Insights Extracted:</h5>
                        <ul className="space-y-1">
                          {doc.keyInsights.map((insight, index) => (
                            <li key={index} className="text-sm text-muted-foreground flex items-start gap-2">
                              <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                              {insight}
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div className="flex gap-2 pt-4">
                        <Button size="sm" variant="outline" onClick={() => handleViewFullReport(selectedDocument!)}>
                          <Eye className="h-4 w-4 mr-1" />
                          View Full Report
                        </Button>
                        <Button size="sm" variant="outline">
                          <Download className="h-4 w-4 mr-1" />
                          Export Data
                        </Button>
                      </div>
                    </>
                  ) : null;
                })()}
              </div>
            ) : (
              <div className="text-center py-8 text-muted-foreground">
                <FileText className="h-12 w-12 mx-auto mb-3 opacity-50" />
                <p>Select a document to view extracted insights</p>
              </div>
            )}
          </CardContent>
        </Card>
      </div>

      {/* Data Pipeline Performance */}
      <Card className="bg-white border-border">
        <div className="px-6 py-4 border-b border-border">
          <h3 className="text-lg font-semibold text-foreground">Data Processing Performance</h3>
        </div>
        <CardContent className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600">98.7%</div>
              <div className="text-sm text-muted-foreground">Extraction Accuracy</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600">3.2min</div>
              <div className="text-sm text-muted-foreground">Avg Processing Time</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600">1,248</div>
              <div className="text-sm text-muted-foreground">Documents Processed</div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Iframe Modal for Full Reports */}
      {showIframe && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg shadow-xl w-full max-w-6xl h-[90vh] flex flex-col">
            <div className="flex items-center justify-between p-4 border-b">
              <h3 className="text-lg font-semibold text-foreground flex items-center gap-2">
                <FileText className="h-5 w-5" />
                Full Investment Report
              </h3>
              <Button
                variant="outline"
                size="sm"
                onClick={() => {
                  setShowIframe(false);
                  // Clean up blob URL to prevent memory leaks
                  if (iframeUrl.startsWith('blob:')) {
                    URL.revokeObjectURL(iframeUrl);
                  }
                  setIframeUrl("");
                }}
                className="flex items-center gap-1"
              >
                <X className="h-4 w-4" />
                Close
              </Button>
            </div>
            <div className="flex-1 p-4">
              <iframe
                src={iframeUrl}
                className="w-full h-full border border-gray-200 rounded"
                title="Investment Report"
                sandbox="allow-same-origin allow-scripts allow-forms"
              />
            </div>
            <div className="p-4 border-t bg-gray-50 flex items-center justify-between">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <ExternalLink className="h-4 w-4" />
                <span>Viewing secure Harvard portfolio data</span>
              </div>
              <Button
                variant="outline"
                size="sm"
                onClick={() => window.open(iframeUrl, '_blank')}
                className="flex items-center gap-1"
              >
                <ExternalLink className="h-4 w-4" />
                Open in New Tab
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}